import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Wrapper = () => <div className="wrapper" />;

const render = () => {
  ReactDOM.render(
    <Wrapper />,
    document.getElementById('root'),
  );
};

export default render;
