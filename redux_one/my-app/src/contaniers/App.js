import React from 'react';
import './App.css';
import {User} from './../components/User';
import {Page} from '../components/Page';
import { connect } from 'react-redux';
import {getPhotos} from '../actions/PageActions';

class App extends React.Component{
  render(){
    const {page, user, getPhotosAction} = this.props;
  return (
    <div className="App">
      <header>
        <h1>Мой топ фото</h1>
      </header>
      <User name={user.name}/>
      <Page photos={page.photos}
       isFetching={page.isFetching}
       year={page.year} getPhotos={getPhotosAction}/>
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

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
