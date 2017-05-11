import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }

    var content = firebase.database().ref('content');

    content.once('value', (snapshot) => {

      let data = snapshot.val();
      let dataArr = Object.keys(data).map(key =>  {
        data[key].id = key;
        return  data[key];
      }); // change object to array
      // console.log(dataArr)
      // console.log(dataArr);
      // this.data = dataArr;
      // console.log(this.state.data);
      this.setState({
        data: dataArr
      });
    });
  }

  render() {
    // let contentArticle = this.state.data.map((val, i)=> {
    //   return (
    //     <div key={i}>
    //       {val.title}
    //     </div>
    //   );
    // });

    return(
      <div>
        {
          this.state.data.map((val, i) => (
            <div key={i}>
              <Link to={`content/${val.id}`}><h2>{val.title}</h2></Link>
              <p>{val.description}</p>
              <span>{val.date}</span><br />
              <span className="btn btn-default">{val.tag}</span>
            </div>
          ))
        }
      </div>
    )
  }
}