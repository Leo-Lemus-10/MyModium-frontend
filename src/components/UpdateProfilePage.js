
import React, { useState, useRef, useEffect } from 'react'
import { Form, Button, Segment, Header, Message, Grid, Checkbox, Label } from 'semantic-ui-react'


const UpdateProfilePage = props => {

    const [genre1Checked, setGenre1Checked] = useState(false)
    const [genre2Checked, setGenre2Checked] = useState(false)
    const [media1Checked, setMedia1Checked] = useState(false)
    const [media2Checked, setMedia2Checked] = useState(false)
    const [platform1Checked, setPlatform1Checked] = useState(false)
    const [platform2Checked, setPlatform2Checked] = useState(false)
    
    const Toggle = (type, listType) => {
        switch(type){
            case 0: 
                switch(listType){
                    case 0: 
                        let prevCheck = usePrevious(genre1Checked)
                        let newCheck = !prevCheck;
                        setGenre1Checked(newCheck)
                    break;
                    

                }
        }

    }
    const toggle = (type, listType) => {
        // switch(type){
        //     case 0: 
        //         switch(listType){
        //             case 0: 
        //                 let prevCheck = usePrevious(genre1Checked)
        //                 let newCheck = !prevCheck;
        //                 setGenre1Checked(newCheck)
        //             break;
                    

        //         }
        // }

    }
    
    return (
        <div className= "update-profile-page">
            <div className= "top-bar">
                    <h1 className= "title">My Modium</h1>                    
            </div>
     
            <div className= "update-profile-page-body">
                <h3>Customize Your Profile</h3>
                
                <Form inverted>       
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
                                        label={'Sci-fi'}
                                        onChange={toggle(0,0)}
                                        checked={genre1Checked}
                                    >
                                        <Label key={'red'}>
                                            'Sci-fi'
                                        </Label>
                                    </Checkbox>
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        label='Action'
                                        onChange={toggle}
                                        checked={genre2Checked}
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
                                        checked={media1Checked}
                                    >
                                       
                                    </Checkbox>
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        label='TV Shows'
                                        onChange={toggle}
                                        checked={media2Checked}
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
                                        checked={platform1Checked}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        label='Hulu'
                                        onChange={toggle}
                                        checked={platform2Checked}
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
                        <br></br>
                        <br></br>
                            <Form.Field>
                                <label>Bio</label>
                                <textarea placeholder= "Tell Me About Yourself"></textarea>
                            </Form.Field>
                            <br></br>
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

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}




export default UpdateProfilePage
