import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ''
        }
    }

    handleChanges = e => {
        this.setState({ itemName: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemName);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} value={this.state.itemName} type="text" placeholder='today I will ...' name="item" />
                <button className='form-btn'>Add</button>
            </form>
        )
    }

}

export default TodoForm