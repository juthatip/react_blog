import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Import custom components
import Main from './common/main';
import Home from './common/home';
import About from './common/About';
import ContentForm from './Components/ContentForm';
import Content from './Components/Content';
import ContentContainer from './common/content';


ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={Main}>
     <IndexRoute component={Home} />
          <Route path="/content" component={Content} />
          <Route path="/content/:title" component={ContentContainer} />
           <Route path="/create" component={ContentForm} />
           <Route path="/about" component={About} />
       </Route>
   </Router>,
    document.getElementById('container')
);
