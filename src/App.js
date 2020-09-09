import React from 'react';
import { Provider } from 'react-redux';

// import './App.css';

import store from './redux/store';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
