import * as React from 'react';
import './App.scss';
import Image from './assets/img.jpg';

const App = () => {
  return (
    <>
      <h3 className="title">Hello, React</h3>
      <img src={Image} />
    </>
  );
};

export default App;
