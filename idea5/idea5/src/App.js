import React, { Component } from 'react';
import IdeaHook from './components/IdeaHooks';
import IdeaClass from './components/IdeaClass';


class App extends Component {

  render() {
    return (
      <div className="App">

        <IdeaClass />
        <IdeaHook />
      </div>
    )
  }
}

export default App;
