import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {Form, Button, Segment, Header, Message } from 'semantic-ui-react';

const LoginPage = (props) => {

    const [badLogin, setBadLogin] = useState(false)
    const history = useHistory()
    let foundUserObject

    const checkIfUserExists = (userString) => {

        return fetch(props.backend+'users')
            .then(r => r.json())
            .then(fetchedArray => {
                foundUserObject = fetchedArray.find(userObject => userObject.username === userString)
            })
    }

    const login = (e) => {
        checkIfUserExists(e.target.loginInput.value)
        .then(() => {
             if (foundUserObject !== undefined) {
                props.setUser(foundUserObject)
                history.push('/recommendations')
             } else {
                 setBadLogin(true)
                 setTimeout(() => setBadLogin(false), 3000)
             }
            })
    }

    return (
        <Segment placeholder>
            <Header as='h2'>Existing User</Header>
            <Form onSubmit={login}>
                <Form.Input
                    id='loginInput'
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                />
                <Button type='submit' content='Login' primary />
            </Form>
                <Button content='New User?' secondary onClick={() => history.push('/createUser')}/>
            {badLogin ? <Message negative header='User does not exist' content="This user is not registered. Try again, or register a new user" /> : null}
        </Segment>

    )
}

export default LoginPage;