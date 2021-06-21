import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RecommendationPage from './components/RecommendationPage';

const Backend = 'http://localhost:3000/'
class App extends Component {
  state = {
    username: '',

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
                <LoginPage />
              </Route>
              <Route exact path='/signup'>
                <SignupPage />
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
