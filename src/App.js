import React from 'react';
import { Provider } from 'react-redux';

// import './App.css';

import store from './redux/store';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header/>
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
