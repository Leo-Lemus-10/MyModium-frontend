
import React, { useState } from 'react'
import { Form, Button, Segment, Header, Message, Grid, Checkbox } from 'semantic-ui-react'


const UpdateProfilePage = props => {

    const [genreChecked, setGenreChecked] = useState([false, false])
    const [mediaChecked, setMediaChecked] = useState([false, false])
    const [platformChecked, setPlatformChecked] = useState([false, false])
    
    const toggle = (type, listType) => {
        // switch(type){
        //     case 0:
        //         switch(listType){
        //             case 0:
        //                 setGenreChecked = 
        //         }
        // }

    }
    
    return (
        <div className= "update-profile-page">
            <div className= "top-bar">
                    <h1 className= "title">My Modium</h1>                    
            </div>
     
            <div className= "update-profile-page-body">
                <Header as='h2'>Customize Your Profile</Header>
                
                <Form>       
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={7}>
                            <h4>Select as many as you want!</h4> 
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <h3>Genres</h3>
                                <Form.Field>
                                    {/* <label>Genres</label> */}
                                    <Checkbox
                                        label='Sci-fi'
                                        onChange={toggle}
                                        checked={genreChecked[0]}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        label='Action'
                                        onChange={toggle}
                                        checked={genreChecked[1]}
                                    />
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
                                    <Checkbox
                                        label='Movies'
                                        onChange={toggle}
                                        checked={mediaChecked[0]}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        label='TV Shows'
                                        onChange={toggle}
                                        checked={mediaChecked[1]}
                                    />
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
                                    <Checkbox
                                        label='Netflix'
                                        onChange={toggle}
                                        checked={platformChecked[0]}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        label='Hulu'
                                        onChange={toggle}
                                        checked={platformChecked[1]}
                                    />
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        {/* <Grid.Column width={5}>
                            <h4>Select as many as you want!</h4>    

                            <h4>Unselect any that you do NOT want to see</h4>
                   
                            <h4>Please select the platforms you have access to</h4>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <h3>Genres</h3>
                            <Form.Field>
                                <label>Genres</label>
                                <Checkbox
                                    label='Sci-fi'
                                    onChange={toggle}
                                    checked={genreChecked[0]}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    label='Action'
                                    onChange={toggle}
                                    checked={genreChecked[1]}
                                />
                            </Form.Field>
                            <h3>Media Type</h3>
                            <Form.Field>
                                <Checkbox
                                    label='Movies'
                                    onChange={toggle}
                                    checked={mediaChecked[0]}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    label='TV Shows'
                                    onChange={toggle}
                                    checked={mediaChecked[1]}
                                />
                            </Form.Field>
                            <h3>Platforms</h3>
                            <Form.Field>
                                <Checkbox
                                    label='Netflix'
                                    onChange={toggle}
                                    checked={platformChecked[0]}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    label='Hulu'
                                    onChange={toggle}
                                    checked={platformChecked[1]}
                                />
                            </Form.Field>
                        </Grid.Column> */}
                    </Grid>
                            <Form.Field>
                                <label>Bio</label>
                                <textarea placeholder= "Tell Me About Yourself"></textarea>
                            </Form.Field>
                            <Form.Field>
                                <label>Profile Picture URL</label>
                                <input placeholder= "Picture URL"></input>
                            </Form.Field>
                            <Form.Field>
                                <Button type= 'submit'>Submit</Button>
                            </Form.Field>
                </Form>
            </div>
         
        </div>
    )
    
    
}



export default UpdateProfilePage
