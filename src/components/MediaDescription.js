import React, { Component } from 'react'
import { Container, Divider, Grid, Segment } from 'semantic-ui-react'

export class MediaDescription extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={5}>
                        <Segment>
                            <Container textAlign='left'>Media Name</Container>
                            <Container textAlign='left'>Categories</Container>
                            <Container textAlign='left'>Genre</Container>
                            <Container textAlign='left'>Platforms</Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment>
                        <Container textAlign='right'>Mediaimage.com</Container>
                        <Container textAlign='right'>Likes Section</Container>
                    </Segment>
                    </Grid.Column>
                    {/* <Divider />
                    <Grid.Colum>
                        <Segment>
                            <Container textAlign='right'>
                                <p>
                                </p>
                            </Container>
                        </Segment>  
                    </Grid.Colum> */}
                </Grid>
            </div>
        )
    }
}

export default MediaDescription
