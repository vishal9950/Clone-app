import React from 'react';
import './index.css';
import Heading from './heading';
import Content from './content';

const Body = () => <div className="cont"><Heading /><Content /></div>;

// const renderBody = () => {
//   ReactDOM.render(
//     <Body />,
//     document.getElementById('root'),
//   );
// };

export default Body;
