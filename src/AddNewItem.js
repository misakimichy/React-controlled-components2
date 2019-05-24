import React, { Component } from 'react';

class AddNewItem extends Component {
    state = {
        value: '',
    };

    // setState
    handleChange = event => {
        this.setState({ value: event.target.value });
      };

    addItem = event => {
        event.preventDefault();
        this.props.onAddItem(this.state.value);
      };

    inputIsEmpty = () => {
    return this.state.value === '';
    };

    render () {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </div>
        )
    };
}

export default AddNewItem;
