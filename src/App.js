import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const posts = [
      {
        title: "Fun thing ahead!",
        blog: "Post 1"
      },
      {
        title: "More fun things ahead!",
        blog: "Post 2"
      },
      {
        title: "Yet more fun things ahead!",
        blog: "Post 3"
      }
    ]

    this.setState({posts});
  }
  

  render() {
    const posts = this.state.posts?.map((post, index) =>(
      <li key={index}>
          <h1 onClick={() => console.log(index)}>{post.title}</h1>
      </li>
    ));
    return(
      <ul>
        {posts}
      </ul>
    )
  }
}

export default App;