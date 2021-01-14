import React from 'react';

const Item = props => {
    const handleClick = e => {
        e.preventDefault();
        props.toggleItem(props.item.id)
    }
    return (
        <div onClick={handleClick} className={`item${props.item.tagged ? ' tagged' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Item