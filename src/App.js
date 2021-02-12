import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false};
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

  handleClick() {
    this.setState({isToggled: !this.state.isToggled});
  }

  render() {

    const posts = this.state.posts?.map((post, index) =>(
      <li key={index}>
          <h1 data-value={index} onClick={this.handleClick}>{post.title}</h1>
      </li>
    ));
    return(
      <>
        {
          this.state.isToggled 
          ?
          <>
            <h1>Fun thing 1!</h1>
            <p>Blog post 1</p>
          </>
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