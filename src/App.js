import { Component } from 'react';
import './App.css';

function FullView() {
  return (
    <section>
      <h1>Fun Blog Post 1</h1>
      <p>This is a post about some fun things that I did lastd week!
        What did I do? Well Last week I programmed, then I went on vacation.
      </p>
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
