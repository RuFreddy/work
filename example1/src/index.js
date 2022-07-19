import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NamesMenu from './components/background-components';
import NamesBar from './components/left-components';
import TopMenu from './components/left-components/topMenu';
import Message from './components/left-components/nameslist-components/message';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NamesMenu />
    <NamesBar />
    <TopMenu/>
    <Message />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

