import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle';


ReactDOM.render(
    <>
    <App /> <GlobalStyle />, // fragment para incapsular os elementos evitando criar uma div.
    </>,
    document.getElementById('root')); //renderização no html



