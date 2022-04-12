import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Maker from './components/maker/maker';
import Login from './components/login/login';
import styles from './app.module.css';

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/maker" exact element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
