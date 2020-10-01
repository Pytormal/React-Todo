// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const ClearData = () => {
    localStorage.clear();
}
const TodoList = (props) => {
    return (
        <div className='todo-list'>
            {props.task.map((task) => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
            <button className='clr-btn' onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
            <button className='clr-btn2' onClick={ClearData}>
                Clear Local app data</button>
        </div>
    )
}

export default TodoList;