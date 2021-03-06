import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false, title: "", blog: ""};
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(index) {
    // So I can access blog and title outside of the map.
    this.setState({isToggled: !this.state.isToggled, title: this.state.posts[index].title, blog: this.state.posts[index].blog});
  }

  render() {

    const posts = this.state.posts?.map((post, index) =>(
      <li key={index}>
          <h1 data-value={index} onClick={() => this.handleClick(index)}>{post.title}</h1>
      </li>
    ));
    return(
      // It works, but you need to click to hide it first.
      <>
        {
          // Toggles the post.
          this.state.isToggled
          ?
          <ul>
            <li>
            <h1>{this.state.title}</h1>
            <p>{this.state.blog}</p>
            </li>
          </ul>
          :
          null
        }
        <ul>
            {posts}
        </ul>
      </>
    )
  }
}

export default App;