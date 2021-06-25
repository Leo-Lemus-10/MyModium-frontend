import { Component } from "react";
import MediaCard from './MediaCard'
import { Card } from 'semantic-ui-react'

class MediaCardContainer extends Component {
    render() {
        // const genreMapper = this.props.categoryObj.genreList
        // const mediaMapper = genreMapper.media
        //  {genreObject.media.map(mediaObject =>

        let foundGenreObject

        // if (media.id === genrelist

        return (
            <Card.Group itemsPerRow={3}>
                {this.props.mediaList.map(mediaObject => <MediaCard key={mediaObject.id} setMedia={this.props.setMedia} mediaObject={mediaObject}/>)}
            </Card.Group>
        )
    }
}

export default MediaCardContainer