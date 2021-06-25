
import React, { useState, useRef, useEffect } from 'react'
import { Form, Button, Segment, Header, Message, Grid, Checkbox, Label } from 'semantic-ui-react'
import CreateUserPage from './CreateUserPage'
import NavBar from './NavBar'
import { useHistory } from 'react-router';

const UpdateProfilePage = props => {

    let [checked, setChecked] = useState({})
    const [newUser, setNewUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        let checked = {
            gen1: false,
            gen2: false,
            med1: false,
            med2: false, 
            plat1: false,
            plat2: false
        }

        let newUser = {
            bio: '',
            prof_pic: ''
        }

        setChecked(checked)
        setNewUser(newUser)
    }, []
    )

    const changeBio = (eve) => {
        let str = eve.target.value
        setNewUser({...newUser, bio: str})
    }

    const changeProfilePic = (ev) => {
        let str = ev.target.value
        setNewUser({...newUser, prof_pic: str})
    }

    const updtUser = () => {
        fetch(props.backend+`users/${props.currentUserId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
          .then((r) => r.json())
          .then((userObj) => {
              console.log(userObj)
              props.setSelectedUser(userObj)
            });   
    }

    // let foundObject

    // const checkIfPlatformExists = (userId) => {


    //     return fetch(props.backend+'platforms')
    //         .then(r => r.json())
    //         .then(fetchedArray => {
    //             foundPlatform = {fetchedArray.filter(platformObject => platformObject.user_id === props.currentUserId).length >= 1}
    //         })
    // }

    // const checkIfExists = (userId, name) => {
        

    //     return fetch(props.backend+`${name}`)
    //         .then(r => r.json())
    //         .then(fetchedArray => {
    //             foundObject = fetchedArray.find(Object => Object.user_id === userId)
    //         })
    // }
    // // toggle(event,2,0)
    
    // const Submissions = (name, e) => {
    //     checkIfPlatformExists(props.currentUserId, name)
    //     checkedEvent = e
    //     .then(() => {
    //         if (foundObject !== undefined) {
    //             if (checkedEvent.target.checked === true) {
    //                 // nothing 
    //             } else {
    //                 //Delete Patch
    //             }
    //         } else {
    //             if (checkedEvent.target.checked === true) {
    //                 //  Create
    //                 let newObject = {

    //                 }
    //                 let postConfig = {
    //                     method: "POST",
    //                     headers: {
    //                       "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify(newObject)
    //             } else {
    //                 //nothing
    //             }
    //         }
    //     })
    // }

    // const Submissions = ("className.value")
    // const Submissions = ("className.value")
    // const Submissions = ("className.value")
    // const Submissions = ("className.value")
    // const Submissions = ("className.value")
    // const Submissions = ("className.value")






    
    
    const toggle = (e, type, listType) => {
        let newCheck = e.target.checked
        switch(type){
            case 0: 
                switch(listType){
                    case 0: 
                        setChecked({...checked, gen1: newCheck})
                    break;
                    case 1:
                        setChecked({...checked, gen2: newCheck})
                    break;
                }
            break;
            case 1:
                switch(listType){
                    case 0: 
                        setChecked({...checked, med1: newCheck})
                    break;
                    case 1:
                        setChecked({...checked, med2: newCheck})
                    break;
                }
            break;
            case 2:
                switch(listType){
                    case 0: 
                        setChecked({...checked, plat1: newCheck})
                    break;
                    case 1:
                        setChecked({...checked, plat2: newCheck})
                    break;
                }
            break;

        }

    }
    
    
    return (
        <div className= "update-profile-page">
            <div className= "top-bar">
                    <h1 className= "title">My Modium</h1>                    
            </div>
     
            <div className= "update-profile-page-body">
                <h3>Customize Your Profile</h3>    
            <Grid>
                <Form onSubmit={()=> {
                    updtUser()
                    history.push('/recommendations')
                }} inverted>       
                    
                        <Grid.Row>
                            <Grid.Column width={8}>
                            <h4>Select as many as you want!</h4> 
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <h3 className="genre-profile-page">Genres</h3>
                                <Form.Field>
                                    <input type= "checkbox"
                                        checked = {checked.gen1} onChange={(event) => toggle(event,0,0)}>
                                    </input>
                                    <label>Sci-Fi</label>
                                </Form.Field>
                                <Form.Field>
                                    <input type= "checkbox"
                                        checked = {checked.gen2} onChange={(event) => toggle(event,0,1)}>
                                    </input>
                                    <label>Action</label>
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={7}>
                            <h4>Unselect any that you do NOT want to see</h4> 
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <h3>Media Type</h3>
                                <Form.Field>
                                    <input type= "checkbox"
                                        checked = {checked.med1} onChange={(event) => toggle(event,1,0)}>
                                    </input>
                                    <label>Movies</label>
                                </Form.Field>
                                <Form.Field>
                                    <input type= "checkbox"
                                        checked = {checked.med2} onChange={(event) => toggle(event,1,1)}>
                                    </input>
                                    <label>TV Shows</label>
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={7}>
                            <h4>Please select the platforms you have access to</h4> 
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <h3>Platforms</h3>
                                <Form.Field>
                                    <input type= "checkbox"
                                        checked = {checked.plat1} onChange={(event) => toggle(event,2,0)}>
                                    </input>
                                    <label>Netflix</label>
                                </Form.Field>
                                <Form.Field>
                                    <input type= "checkbox"
                                        checked = {checked.plat2} onChange={(event) => toggle(event,2,1)}>
                                    </input>
                                    <label>Hulu</label>
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        <br></br>
                        <br></br>
                            <Form.Field>
                                <label>Bio</label>
                                <textarea placeholder= "Tell Me About Yourself" onChange={(event) => changeBio(event)}></textarea>
                            </Form.Field>
                            <br></br>
                            <Form.Field>
                                <label>Profile Picture URL</label>
                                <input placeholder= "Picture URL" onChange={(event) => changeProfilePic(event)}></input>
                            </Form.Field>
                            <Form.Field>
                                <Button type= 'submit' >Submit</Button>
                            </Form.Field>
                </Form>
            </Grid>
            </div>     
        </div>

    )
    
    
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}




export default UpdateProfilePage


