import React from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Logged from './pages/Logged';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');
  @import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css");

  * {
    font-size: 62.5%;
    font-family: 'Source Sans Pro', sans-serif;
  }
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #f1f2f3;
  }
`;

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/logged" component={Logged} />
  </div>
);

export default App;
