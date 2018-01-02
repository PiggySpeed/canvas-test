import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './pages/main';
import './styles/styles';

const renderComponent = (Component) => {
  ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('content')
);
};

renderComponent(Main);

if (module.hot) {
  module.hot.accept('./pages/main.js', () => {
    const NextComponent = require('./pages/main.js').default;
  renderComponent(NextComponent);
})
}
