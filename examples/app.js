import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GithubProfile } from '../';

class App extends Component {
  render() {
    return (
      <div>
        <GithubProfile username="mamal72" />
        <GithubProfile username="mdibaiee" />
        <GithubProfile username="mohebifar" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
