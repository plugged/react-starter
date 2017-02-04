import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style/app.scss';

const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render();
  });
}
