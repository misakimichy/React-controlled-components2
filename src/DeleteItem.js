import React from 'react';

const DeleteItem = props => {
    const handleDeleteItem = event => {
        props.onDeleteItem();
    };

    return (
        <button onClick={handleDeleteItem} disabled={props.disableDeleteButton}>
            Delete Last Item
        </button>
    )
}

export default DeleteItem;