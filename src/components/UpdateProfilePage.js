
import React, { useState, useRef, useEffect } from 'react'
import { Form, Button, Segment, Header, Message, Grid, Checkbox, Label } from 'semantic-ui-react'


const UpdateProfilePage = props => {

    const [genre1Checked, setGenre1Checked] = useState()
    const [genre2Checked, setGenre2Checked] = useState()
    const [media1Checked, setMedia1Checked] = useState()
    const [media2Checked, setMedia2Checked] = useState()
    const [platform1Checked, setPlatform1Checked] = useState()
    const [platform2Checked, setPlatform2Checked] = useState()
    
    let [checked, setChecked] = useState({})

    useEffect(() => {
        let checked = {
            gen1: false,
            gen2: false,
            med1: false,
            med2: false, 
            plat1: false,
            plat2: false
        }
        setChecked(checked)
    }, []
    )
    
    
    
    const toggle = (e, type, listType) => {
        let newCheck = e.target.checked
        switch(type){
            case 0: 
                switch(listType){
                    case 0: 
                        setChecked({...checked, gen1: newCheck})
                    break;
                    case 1:
                        setChecked({...checked, gen1: newCheck})
                    break;
                }
            break;
            switch(listType){
                case 0: 
                    setChecked({...checked, gen1: newCheck})
                break;
                case 1:
                    setChecked({...checked, gen1: newCheck})
                break;
            }

        }

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
                                    <input type= "checkbox"
                                    checked = {checked.gen1} onChange={(event) => toggle(event,0,0)}>
                                    </input>
                                    <label>Sci-Fi</label>
                                    {/* <Checkbox
                                        onChange={(event)=> {toggle(event,0,0)}}
                                        checked={checked.gen1}
                                    >
                                        <Label key={'red'}>
                                            'Sci-fi'
                                        </Label>
                                    </Checkbox> */}
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
