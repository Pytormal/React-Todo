import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: 'Water Plants'
    };
}




  render() {
    return (
      <section className='App'>
        <h2>Welcome to your Todo App!</h2>
        <p>{this.state.task}</p>
      </section>
    );
  }
}

export default App;
