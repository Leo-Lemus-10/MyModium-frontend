import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import CategoryContainer from './CategoryContainer'
import NavBar from "./NavBar";

const RecommendationPage = (props) =>  {

    return (
        <Grid>
            <Grid.Column width={16}>
                <Segment>
                    <NavBar
                    setUser={props.setUser}
                    username={props.username}
                    />
                </Segment>
                <Segment>
                    <CategoryContainer genreList={props.genreList} mediaList={props.mediaList} categoryList={props.categoryList} setMedia={props.setMedia}/>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

export default RecommendationPage
