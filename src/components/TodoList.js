// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Item from './Todo'

const TodoList = props => {
    return (
        <div className='toDo-list'>
            {props.toDoList.map(item => (
                <Item toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
            <button className='clear-button' onClick={e => props.clearTagged()}>
                Clear completed Tasks
            </button>
        </div>
    )
}

export default TodoList