import React, { useState } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {

    const history = useHistory()
    const [loginPrompt, setLoginPrompt] = useState(false)

    return (
        <div style={{paddingBottom: '1%' }}>
            <Menu>
                <Menu.Item
                    name='Profile Page'
                    onClick={() => {
                        if (props.username !== '') {
                            history.push('/profile')
                        } else {
                            setLoginPrompt(true)
                            setTimeout(() => setLoginPrompt(false), 2000)
                        }
                    }}
                >
                    Profile Page
                </Menu.Item>
                <Menu.Item
                    name='Recommendations'
                    onClick={() => {
                        if (props.username !== '') {
                            history.push('/recommendations')
                        } else {
                            setLoginPrompt(true)
                            setTimeout(() => setLoginPrompt(false), 2000)
                        }
                    }}
                >
                    Recommendations
                </Menu.Item>
                <Menu.Item
                    name='Update Profile'
                    onClick={() => {
                        if (props.username !== '') {
                            history.push('/updateProfile')
                        } else {
                            setLoginPrompt(true)
                            setTimeout(() => setLoginPrompt(false), 2000)
                        }
                    }}>
                    Update Profile
                </Menu.Item>
                <Menu.Item
                    name='Login'
                    onClick={() => {props.username === '' ? history.push("/login") : props.setUser({username: '', userId: null, selectedUser: {}})}}
                >
                    {props.username === '' ? 'Login' : 'Log Out'}
                </Menu.Item>
            </Menu>
            {loginPrompt ? <Message header='Please log in' content='This feature is only available to registered users. Please log in and try again.'/> : null}
        </div>
    )
}



export default NavBar