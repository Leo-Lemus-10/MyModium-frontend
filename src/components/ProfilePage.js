import React, { Component } from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import NavBar from "./NavBar";

export class ProfilePage extends Component {
    render() {
        let user = this.props.selectedUser
        console.log(user)
        return (
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <h1>Username</h1>
                            <Grid.Row>
                                <h3>{user.username}</h3>
                            </Grid.Row>
                            <h1>My Genres</h1>
                            <Grid.Row>
                                <h3>Genres</h3>
                                {/* <h3>{user.genres[0].name}</h3> */}
                                </Grid.Row>
                                <h1>My Platforms</h1>
                                <Grid.Row>
                                <h3>Platforms</h3>
                                {/* <h3>{user.platforms[0].name}</h3> */}
                                </Grid.Row>
                                <h1>My Media Types</h1>
                                <Grid.Row>
                                <h3>Categories</h3>
                                {/* <h3>{user.categories[0].name}</h3> */}
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image size='big' src={user.prof_pic} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <h1>Bio</h1>
                        <Grid.Column width={16}>
                            <h4>{user.bio}</h4>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}

export default ProfilePage
