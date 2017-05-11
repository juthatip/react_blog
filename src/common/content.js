import React ,{ Component } from 'react';
// import Content from '../Components/Content';

export default class ContentContainer extends Component {

  constructor() {
    super();

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    const params = this.props.routeParams.title;
    this.loadContent(params);
  }

  loadContent(params) {
    firebase.database().ref('content/' + params).once('value').then(function(snapshot) {

      let data = snapshot.val();
      // let dataArr = Object.keys(data).map(key => data[key]);

      console.log(data);

      this.setState({
        data: data
      });

    });
  }

  render() {
    // console.log(this.props.routeParams);


    return(
      <div>
        {/*{this.state.data}*/}
      </div>
    );
  }
}