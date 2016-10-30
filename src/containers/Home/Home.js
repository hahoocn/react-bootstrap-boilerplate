import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { showHello, showHelloAsync, showMoviesAsync } from '../../actions/home';
import logoImg from '../../assets/images/logo.jpg';
import config from '../../config';

class Home extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    home: React.PropTypes.object,
  };

  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.home.info) dispatch(showHello('Dispatch showHello action'));
    if (!this.props.home.moviesTotal) dispatch(showMoviesAsync());
    if (!this.props.home.name || !this.props.home.infoAsync) {
      dispatch(showHelloAsync('This is the content of'));
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.home !== nextProps.home;
  }

  render() {
    const styles = require('./Home.css');

    const { home } = this.props;
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
            <div>{home.info}</div>
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

const mapStateToProps = (state) => {
  const select = {
    home: state.home
  };
  return select;
};

export default connect(mapStateToProps)(Home);
