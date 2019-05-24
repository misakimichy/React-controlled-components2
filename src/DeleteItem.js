import React from 'react';
import PropTypes from 'prop-types';

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

// Add propTypes here
DeleteItem.propTypes = {
    onDeleteItem: PropTypes.func.isRequired,
    disableDeleteButton: PropTypes.func.isRequired,
};

export default DeleteItem;