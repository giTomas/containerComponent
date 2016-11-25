import React from 'react';
// import {createStore} from 'redux';
import axios from 'axios';


// prop is object need to by destructured
const CommentList = function({arr}) {
  const renderComment = function({body, author}, index) {
    return <li key={index.toString()}>{body}-{author}</li>
  }
  console.log(arr)
  return <ul> {arr.map(renderComment)}</ul>;

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
    // return <ul> {this.state.comments.map(renderComment)} </ul>
    return <CommentList arr={this.state.comments}/>
  }

}

export default AppContainer;
