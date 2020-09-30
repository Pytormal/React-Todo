import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import VideoBg from "reactjs-videobg";
// import mp4 from "./components/girl.mp4";


import './components/main.css'

  const task = [
    {  name: 'Enter your Todo items in box above',
    id: 123124,
    completed: false
    },
      {  name: 'Select or touch a task to complete it',
    id: 365475476,
    completed: false
  },
      {  name: 'click the "Clear Completed Tasks" button to remove your tasks',
    id: 3654756,
    completed: false
  },
    {
      name: 'make as many tasks as you like!',
      id: 365411756,
      completed: false
    },
      {  name: 'Enjoy the App!',
    id: 36541231756,
    completed: false
  }
    
  
  ]
 
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 constructor() {
    super();
    this.state = {
    task
    };
}

  toggleTask = taskId => {
    console.log('task toggled', taskId)
    this.setState({
      task: this.state.task.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
}

  addToDo = (toDoName) => {
    const newToDo = {
      name: toDoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      task:[...this.state.task, newToDo]
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      task: this.state.task.filter((task) => !task.completed)
    })
  }

  render() {
    return (
      <section className='App'>

        <VideoBg >
        <VideoBg.Source src={'https://player.vimeo.com/external/384669529.sd.mp4?s=9298f360e4c1b897d738481bcfdc4a2f607e442a&profile_id=139&oauth2_token_id=57447761'} type="" />
        </VideoBg>
        
        <div className="h-container">
                  <h2 className="header">Welcome to your Todo App!</h2>
        </div>
        <TodoForm addToDo={this.addToDo} />
        <div>
           <TodoList
          toggleTask={this.toggleTask}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
        />
        </div>
       
      </section>
    );
  }
}

export default App;
