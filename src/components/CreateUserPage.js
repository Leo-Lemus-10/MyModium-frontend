import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Button, Segment, Header, Message } from 'semantic-ui-react'

const CreateUserPage = (props) => {

    const [badRegister, setBadRegister] = useState(false)
    const history = useHistory()
    let foundUserObject

    const checkIfUserExists = (userString) => {

        return fetch(props.backend+'users')
            .then(r => r.json())
            .then(fetchedArray => {
                foundUserObject = fetchedArray.find(userObject => userObject.username === userString)
            })
    }

    const register = (e) => {
        checkIfUserExists(e.target.registerInput.value)
        .then(() => {
             if (foundUserObject === undefined) {
                let newUserObject = {
                    username: e.target.registerInput.value
                }
                let postConfig = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUserObject),
                  }
                fetch(props.backend+'users', postConfig)
                  .then(r => r.json())
                  .then(postedUserObject => {
                      props.setUser(postedUserObject)
                      history.push('/updateProfile')
                  })
             } else {
                 setBadRegister(true)
                 setTimeout(() => setBadRegister(false), 3000)
             }
            })
    }

    
    return (
        <Segment placeholder>
            <Header as='h2'>New User</Header>
            <Form onSubmit={register}>
                <Form.Input
                    id='registerInput'
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                />
                <Button content='Register' primary />
            </Form>
            {badRegister ? <Message negative header='User already exists' content="This user is already registered. Log in with this user, or create a different user." /> : null}
            <Button content='Existing User?' secondary onClick={() => history.push('/login')}/>
        </Segment>
    )

    

}

export default CreateUserPage
