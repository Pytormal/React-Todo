import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const toDoList = [
  {
    name: 'welcome to the one and only Todo list you need',
    id: 770,
    tagged: false,
  },
  {
    name: 'add what you want to complete',
    id: 771,
    tagged: false,
  },
  {
    name: 'or what your next goal is to complete',
    id: 772,
    tagged: false,
  },
  {
    name: 'optimized and responsive with Desktop. . . .',
    id: 773,
    tagged: false,
  },
  {
    name: 'mobile smart phones,',
    id: 774,
    tagged: false,
  },
  {
    name: ' with the dual screen Surface Duo',
    id: 775,
    tagged: false,
  },
  {
    name: 'touch or click a itme to tag it as completed',
    id: 776,
    tagged: false,
  },
  {
    name: 'click to remove completed items',
    id: 777,
    tagged: false,
  },
];

class App extends React.Component {

  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
     toDoList: toDoList
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addItem = itemName => {
    this.setState({
      toDoList: [...this.state.toDoList, {name: itemName, id: Date.now(), tagged: false}]
    })
  }

  toggleItem = itemId => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            tagged: !item.tagged
          }
        }
        return item
      })
    })
  }

  clearTagged = () => {
    console.log('Clear btn clicked')
    this.setState({
      toDoList: this.state.toDoList.filter(item => {
        return !item.tagged
      })
    })
  }

  render() {
    return (
      <>
      <section>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </section>
        <section>
          <TodoList clearTagged={this.clearTagged} toggleItem={this.toggleItem} toDoList={this.state.toDoList} />
        </section>
        </>
    );
  }
}

export default App;
