import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RecommendationPage from './components/RecommendationPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CreateUserPage from './components/CreateUserPage';
import MediaDescription from './components/MediaDescription';
import ProfilePage from './components/ProfilePage';
import UpdateProfilePage from './components/UpdateProfilePage';
import NavBar from "./components/NavBar";

const backend = 'http://localhost:3000/'
class App extends Component {
  state = {
    username: '',
    userId: null,
    selectedUser: {},
    mediaSelected: {},
    mediaList: [],
    userList: [],
    genreList: [],
    platformList: [],
    categoryList: []

  }

  componentDidMount() {
    this.fetchLists()
  }

  fetchLists = () => {
    fetch(backend+'media')
    .then(r => r.json())
    .then(mediaList => this.setState({mediaList}))

    fetch(backend+'users')
    .then(r => r.json())
    .then(userList => this.setState({userList}))

    fetch(backend+'genres')
    .then(r => r.json())
    .then(genreList => this.setState({genreList}))

    fetch(backend+'platforms')
    .then(r => r.json())
    .then(platformList => this.setState({platformList}))

    fetch(backend+'categories')
    .then(r => r.json())
    .then(categoryList => this.setState({categoryList}))
  }

  setUser = (userObject) => {
    this.setState({
      username: userObject.username,
      userId: userObject.id,
      selectedUser: userObject
    })
  }

  setSelectedUser = (userObject) => {
    this.setState({
      selectedUser: userObject
    })
  }
  setMedia = (mediaObject) => {
    this.setState({
      mediaSelected: mediaObject
    })
  }


  render() {
    
    return (
      <Router>
        <div className="App">
        <NavBar
              setUser={this.setUser}
              username={this.state.username}
            />
          <header className="App-header">
            <Route path='/'>
              {/* <TitleBar?/> */}
            </Route>
            <Switch>
              <Route exact path ='/'>
                <HomePage />
              </Route>
              <Route exact path ='/login'>
                <LoginPage setUser={this.setUser} backend={backend}/>
              </Route>
              <Route exact path='/createUser'>
                <CreateUserPage setUser={this.setUser} backend={backend}/>
              </Route>
              <Route exact path='/mediaDescription'>
                <MediaDescription setUser={this.setUser} username={this.state.username}  mediaSelected={this.state.mediaSelected}/>
              </Route>
              <Route exact path='/profile'>
                <ProfilePage setUser={this.setUser} username={this.state.username}  selectedUser={this.state.selectedUser}/>
              </Route>
              <Route exact path='/updateProfile'>
                <UpdateProfilePage setSelectedUser={this.setSelectedUser} username={this.state.username}  currentUserId = {this.state.userId} backend={backend}/>
              </Route>
              <Route exact path='/recommendations'>
                <RecommendationPage username={this.state.username} setUser={this.setUser} genreList={this.state.genreList} setMedia={this.setMedia} categoryList={this.state.categoryList} mediaList={this.state.mediaList}/>
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    )
  }
}


export default App;
