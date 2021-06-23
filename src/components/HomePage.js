import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
    render() {
        return (
            <div className= "homepage">
                <div className= "top-bar">
                    <h1 className= "title">My Modium</h1>                    
                </div>
                <div classname= "homepage-body">
                    <h3 className= "welcome">Welcome!</h3>
                    <p className= "website-description">Get recommendations based off your interests</p>
                    <h5 className= "homepage-prompt">Please Login or Signup to Continue</h5>
                    
                    <div className= "homepage-btns">
                        <Link to= "/login">
                            <button className= "login-btn">Login</button>
                        </Link>
                        <Link to= "/signup">
                            <button className= "signup-btn">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
