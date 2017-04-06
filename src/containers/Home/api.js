import request from '../../utils/api';

const showHelloApi = (name) => {
  const result = new Promise((resolve) => {
    const resJson = { infoAsync: 'Async loading' };
    resJson.name = name;
    resolve(resJson);
  });
  return result;
};

const showMoviesApi = () => request({
  url: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
  crossOrigin: true
});

export { showHelloApi, showMoviesApi };
