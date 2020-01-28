import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data'
import CartPage from './CartPage';

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: [],
    totalSum: 0,
    totalCount: 0,
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id],
      totalCount: this.state.totalCount + 1,
      totalSum: Math.round(this.state.totalSum + item.price),
    });
  }

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1),
      ]
    });
  }

  renderContent(){
    switch(this.state.activeTab){
      default:
        case 0: 
          return ( 
        <ItemPage 
          items={items}
          onAddToCart={this.handleAddToCart} />
        );
        case 1: 
          return this.renderCart();
    }
  }

  renderCart(){
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    let cartItems = Object.keys(itemCounts).map(itemId => {
      var item = items.find(item => 
        item.id === parseInt(itemId, 10)
        );

        return {
          ...item,
          count: itemCounts[itemId],
        }
    });

    let sumOfCartItems = cartItems.reduce((sumOfCartItems, item) => {
      return sumOfCartItems + item.price * item.count;
    }, 0);

    return (
      <CartPage items={cartItems}
      onAddOne={this.handleAddToCart}
      onRemoveOne={this.handleRemoveOne}
      totalSum={Math.round(sumOfCartItems)} />
    );
  }

  render(){
    let {activeTab} = this.state;
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} totalSum={this.state.totalSum} totalCount={this.state.totalCount}/>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    )
  }
}

export default App;
