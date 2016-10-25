import React, { Component } from 'react';
import Content from '../Components/Content';

class Home extends Component {
  constructor() {
    super();
  }
    render(){
        return (
          <div>
            <h1>Posts</h1>
            <Content />
          </div>
        );
    }
}

export default Home;
