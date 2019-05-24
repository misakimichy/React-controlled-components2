import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewItem from './AddNewItem'
import DeleteItem from './DeleteItem'
import ItemList from './ItemList'

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item]}));
};


  handleDeleteItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>

        {/* Add AddNewItem component here */}
        <AddNewItem onAddItem={this.handleAddItem}/>

        {/* Add Delete component here */}
        <DeleteItem 
          onDeleteItem={this.handleDeleteItem} 
          disableDeleteButton={this.noItemsFound()}
        />

        {/* Add List component here */}
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
