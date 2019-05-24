import React from 'react';
import PropTypes from 'prop-types';

const ItemList = props => {
    // console.log(props);
    return(
        <div>
            <p className="items">Items</p>
            <ol className="item-list">
                {props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </div>
    );
};

// Add propTypes here
ItemList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ItemList;
