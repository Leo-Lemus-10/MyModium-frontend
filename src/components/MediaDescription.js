import React, { Component } from 'react'
import { Container, Divider, Grid, Segment, Image } from 'semantic-ui-react'

export class MediaDescription extends Component {
    render() {
        let media = this.props.mediaSelected
        console.log(media.categories[0].name)
        return (
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <h1>Title</h1>
                            <Grid.Row>
                                <h3>{media.name}</h3>
                            </Grid.Row>
                            <h1>Genre</h1>
                            <Grid.Row>
                                <h3>{media.genres[0].name}</h3>
                            </Grid.Row>
                            <h1>Platform</h1>
                            <Grid.Row>
                                <h3>{media.platforms[0].name}</h3>
                            </Grid.Row>
                            <h1>Media Type</h1>
                            <Grid.Row>
                                <h3>{media.categories[0].name}</h3>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image size='big' src={media.picture} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <h2>{media.description}</h2>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}

export default MediaDescription
