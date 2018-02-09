import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './index.jsx';

const App = () => <div className="complete"><Wrapper /></div>;

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

export default render;
