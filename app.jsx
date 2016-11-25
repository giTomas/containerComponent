import React from 'react';
// import {createStore} from 'redux';
import axios from 'axios';

function CommentList(comments) {
  const renderComment = function({body, author}, index) {
    return <li key={index.toString()}>{body}-{author}</li>
  }
  // console.log(comments)
  return (
    <ul> {comments.map(renderComment)}</ul>
  )
}

const renderComment = function({body, author}, index) {
  return <li key={index.toString()}>{body}-{author}</li>
}

class AppContainer extends React.Component {
  constructor(){
    super();
    this.state = { comments: [] }
  }

  componentDidMount() {
    axios.get('/comments.json')
          // .then(response => console.log(response.data.comments))
          .then(({data : {comments}}) => this.setState({comments:comments}))
          .catch(error => console.log(error));
  }

  render() {
    const coms = this.state.comments;
    console.log(coms);
    return <ul> {this.state.comments.map(renderComment)} </ul>
    // return <CommentList comments={this.state.comments}/>
  }

}

export default AppContainer;
