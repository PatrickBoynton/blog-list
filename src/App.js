import React,{ Component } from 'react';
import './App.css';

function FullView(props) {
  const posts = props.posts?.map((post, index) =>(
  <React.Fragment key={index}>
    <h1>{post.title}</h1>
    <p>{post.text}</p>
  </React.Fragment>
  ));
  return (
    <section>
      {posts}
    </section>
  )
}

class BlogList extends Component {
  render() {
    return (
      <aside>
        <ul>
        <li>
          <h1>Fun blog post 1</h1>  
        </li>
        <li>
          <h1>Fun blog post 2</h1>
          </li>
        <li>
          <h1>Fun blog post 3</h1>
        </li>
      </ul>
      </aside>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const posts = [
      {
        title: "Blog post 1",
        text: "Fun things happened!"
      },
      {
        title: "Blog post 2",
        text: "Fun thing two happened!",
      },
      {
        title: "Blog post 3",
        text: "Fun thing three happened!",
      }
    ]
    this.setState({ posts });
  }

  render()  {
    return (<div className="App">
      <FullView />
      <BlogList posts={this.state?.posts} />
    </div>)
  }
}

export default App;
