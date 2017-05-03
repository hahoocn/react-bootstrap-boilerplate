import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { showHello, showHelloAsync, showMoviesAsync } from './actions';
import logoImg from '../../assets/images/logo.jpg';
import config from '../../config';
import { selectInfo, selectHome } from './selectors';

class Home extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired,
    homeinfo: PropTypes.string,
  };

  static defaultProps = {
    homeinfo: undefined,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.homeinfo) dispatch(showHello('Dispatch showHello action'));
    if (!this.props.home.moviesTotal) dispatch(showMoviesAsync());
    if (!this.props.home.name || !this.props.home.infoAsync) {
      dispatch(showHelloAsync('This is the content of'));
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.home !== nextProps.home;
  }

  render() {
    const styles = require('./styles.css');

    const { home, homeinfo } = this.props;
    return (
      <div className={styles.main}>
        <Helmet title={config.app.title} />
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImg} alt="" />
              </p>
            </div>
            <h1>Hahoo App!</h1>
            <h2>Boilerplate app for bootstrap with React</h2>
            <p>
              <a className={styles.github} href="https://github.com/hahoocn/react-bootstrap-boilerplate" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" /> View on Github
              </a>
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.content}>
            <div>{homeinfo}</div>
            <div>Remote loading: Movies {home.moviesTotal}</div>
            <div>{home.name} {home.infoAsync}</div>
          </div>
        </div>

      </div>
    );
  }
}

Home.fetchData = ({ store }) => {
  const fetch = Promise.all([
    store.dispatch(showHelloAsync('This is the content of')),
    store.dispatch(showMoviesAsync()),
    store.dispatch(showHello('Dispatch showHello action'))
  ]);
  return fetch;
};

const mapStateToProps = state => ({
  home: selectHome(state).toObject(),
  homeinfo: selectInfo(state),
});

export default connect(mapStateToProps)(Home);
