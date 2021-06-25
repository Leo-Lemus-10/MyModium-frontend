import React, { Component } from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import NavBar from "./NavBar";

export class ProfilePage extends Component {
    render() {
        let user = this.props.selectedUser
        console.log(user)
        return (
                <Grid celled>
                    <Segment>
                        <NavBar
                            setUser={this.props.setUser}
                            username={this.props.username}
                        />
                        </Segment>
                        <Segment>
                            </Segment>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <h1>Title</h1>
                            <Grid.Row>
                                <h3>{user.username}</h3>
                            </Grid.Row>
                            {/* <h1>Genre</h1>
                            <Grid.Row>
                                <h3>{user.genres[0].name}</h3>
                                </Grid.Row>
                                <h1>Platform</h1>
                                <Grid.Row>
                                <h3>{user.platforms[0].name}</h3>
                                </Grid.Row>
                                <h1>Media Type</h1>
                                <Grid.Row>
                                <h3>{user.categories[0].name}</h3>
                            </Grid.Row> */}
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image size='big' src={user.prof_pic} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <h2>{user.bio}</h2>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}

export default ProfilePage
