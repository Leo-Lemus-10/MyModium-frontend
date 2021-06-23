import { Card, Image } from "semantic-ui-react";
import React from 'react'
import {useHistory} from 'react-router'

const MediaCard = (props) => (
    
    const history = useHistory()

    <Card>
        <div onClick={() => {
            props.setMedia(mediaObject)
            history.push('/mediaDescription')
        }}>
            <Image src={props.mediaObject.picture} size='medium'/>
            <Card.Header>{props.mediaObject.name}</Card.Header>
        </div>
    </Card>
)

export default MediaCard