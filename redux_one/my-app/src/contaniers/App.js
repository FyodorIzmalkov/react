import React, { Component } from 'react';
import './App.css';
import {User} from './../components/User';
import {Page} from '../components/Page';
import { connect } from 'react-redux';

class App extends React.Component{
  render(){
    const {page, user} = this.props;
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
      <User name={user.name}/>
      <Page photos={page.photos} year={page.year}/>
    </div>
  )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page,
  }
}

export default connect(mapStateToProps)(App);
