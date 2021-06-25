import { Card, Image } from "semantic-ui-react";
import React from 'react'
import { useHistory } from 'react-router'

const MediaCard = (props) => {
    
    const history = useHistory()
    const newMediaObject = props.mediaObject
    return(
        <div onClick={() => {
            props.setMedia(newMediaObject)
            history.push('/mediaDescription')
        }}>
            <Card color= 'blue' image={props.mediaObject.picture}>
                <Image src={props.mediaObject.picture} size='medium'/>
                <Card.Content>
                    <Card.Description>{props.mediaObject.name}</Card.Description>
                </Card.Content> 
            </Card>
            
        </div>
    )
}

export default MediaCard