import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ContentForm extends Component {
  constructor() {
    super();
    this.handleContentForm = this.handleContentForm.bind(this);

    this.state = {
      title: '',
      description: '',
      tag: ''
    }
  }

  handleTitle(e) {
    this.setState({ title: e.target.value});
  }

  handleDescription(e) {
    this.setState({ description: e.target.value});
  }

  handleTag(e) {
    this.setState({ tag: e.target.value});
  }

  formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
    let strTime = hours + ':' + minutes + ':' + seconds;
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() +  " " + strTime;
  }

  handleContentForm() {
    let contentId = firebase.database().ref().child('content').push().key;
    let d = new Date();
    let time = this.formatDate(d);

    console.log(time);

    firebase.database().ref('content/' + contentId ).set({
      title: this.state.title,
      description: this.state.description,
      tag: this.state.tag,
      date: time
    });

    this.setState({
      title: '',
      description: '',
      tag: ''
    });


  }
    render() {
        return(
            <div>
                <h1>Create a new content</h1>
                <div className="">
                  <div className="form-group">
                    <h4>Title:</h4>
                      <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitle.bind(this)}/>
                    </div>
                  <div className="form-group">
                    <h4>Description:</h4>
                   <textarea name="" id="" cols="30" rows="10" className="form-control" value={this.state.description} onChange={this.handleDescription.bind(this)}></textarea>
                    </div>
                  <div className="form-group">
                    <h4>Tag:</h4>
                   <input type="text" className="form-control" value={this.state.tag} onChange={this.handleTag.bind(this)} />
                    </div>
                   <button className="btn btn-success" onClick={this.handleContentForm}>Create</button>
                </div>
            </div>
        );
    }
}

