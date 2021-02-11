import { Component } from 'react';
import './App.css';

function FullView() {
  return <p>Full View</p>
}

class BlogList extends Component {
  render() {
    return <p>Blog List</p>
  }
}

class App extends Component {
  render()  {
    return (<div className="App">
      <BlogList />
      <FullView />
    </div>)
  }
}

export default App;
