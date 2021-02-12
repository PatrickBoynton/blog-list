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
  handleClick(index, state) {
    
  }

  render() {
    const posts = this.state.posts?.map((post, index) =>(
      <li key={index}>
          <h1 id={"test-" + index} onClick={this.handleClick}>{post.title}</h1>
      </li>
    ));
    return(
      <>
        <FullPosts posts={this.state?.posts}/>
        <ul>
          {posts}
        </ul>
      </>
    )
  }
}

export default App;