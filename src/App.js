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

const backend = 'http://localhost:3000/'
class App extends Component {
  state = {
    username: '',
    userId: null

  }

  setUser = (userObject) => {
    this.setState({
      username: userObject.username,
      userId: userObject.id
    })
  }


  render() {
    
    return (
      <Router>
        <div className="App">
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
                <MediaDescription/>
              </Route>
              <Route exact path='/profile'>
                <ProfilePage />
              </Route>
              <Route exact path='/updateProfile'>
                <UpdateProfilePage />
              </Route>
              <Route>
                <RecommendationPage />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    )
  }
}


export default App;
