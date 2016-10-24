import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Import custom components
import Main from './common/main';
import Home from './common/home';
import About from './common/About';
import ContentForm from './Components/ContentForm';


ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={Main}>
     <IndexRoute component={Home} />
           <Route path="/create" component={ContentForm} />
           <Route path="/about" component={About} />
       </Route>
   </Router>,
    document.getElementById('container')
);
