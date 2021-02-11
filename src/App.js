import { Component } from 'react';


class BlogPost extends {

  render() {

  }
}

function BlogList(props) {
  const posts = props.posts?.map((post, index) => (
    // <li>{post.title}</li>
    <BlogPost key={index} post={post}/>
  ));
  return(<ul>{posts}</ul>)
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const posts = [
      {
        title: "Post Title 1",
        text: "Some text"
      },
      {
        title: "Post Title 2",
        text: "Some more text"
      },
      {
        title: "Post Title 3",
        text: "Yet more text"
      }
    ]

    this.setState({ posts })
  }
  render() {
    return (
      <BlogList posts={this.state?.posts}/>
    )
  }
}

export default App;