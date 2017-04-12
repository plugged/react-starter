import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './components/App';
import './style/app.scss';

const history = createHistory();
const initialState = {
  router: {
    location: {
      pathname: '/about',
      search: '',
      hash: '',
      key: 'a5pd3c'
    }
  }
};
const store = configureStore({initialState}, history);

const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    rootEl
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
