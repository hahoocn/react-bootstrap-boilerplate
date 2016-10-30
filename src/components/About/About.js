import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

class About extends React.Component {
  state = {}

  render() {
    const pageTitle = `About - ${config.app.title}`;
    return (
      <div className="container">
        <Helmet title={pageTitle} />
        <h1>About</h1>
        <p>A boilerplate for bootstrap with React.</p>
        <p>Server side and client side rendering support.</p>
        <p>
          ( Node.js, React.js, Redux, Webpack, React Bootstrap, CSS Modules, PostCSS, Babel,
            ES2015, ESLint ... )
        </p>
      </div>
    );
  }
}

export default About;
