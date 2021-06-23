import { Component } from "reaact";
import MediaCard from './MediaCard'
import { Card } from 'semantic-ui-react'

class MediaCardContainer extends Component {
    
    render() {
        return (
            <Card.Group itemsPerRow={3}>
                {this.props.mediaList.map(mediaObject => <MediaCard key={mediaObject.id} setMedia={this.props.setMedia} mediaObject={mediaObject}/>)}
            </Card.Group>
        )
    }
}

export default MediaCardContainer