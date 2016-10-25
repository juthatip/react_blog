import React, { Component } from 'react';

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      data: ''
    }

    var content = firebase.database().ref('content');

    content.on('value', (snapshot) => {

      let data = snapshot.val();
      let dataArr = Object.keys(data).map(key => data[key]); // change object to array

      // console.log(dataArr);
      this.data = dataArr;
      // console.log(this.state.data);
      this.setState({
        data: this.data
      });
    });
  }
  render() {
    console.log(this.state.data);
    // let contentArticle = this.state.data.map((val, i)=> {
    //   return(
    //     <div key={i}>
    //       {val.title}
    //     </div>
    //   );
    // });

    return(
      <div>
        {/*{contentArticle}*/}
      </div>
    );
  }
}