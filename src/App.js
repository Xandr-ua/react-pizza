import React from 'react';
import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import Main from './components/main/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <Filter />
      <Main />
    </div>
  );
}

export default App;
