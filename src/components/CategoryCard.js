import React, { Component } from 'react'
import { Grid, GridColumn, Header, Card, Segment } from 'semantic-ui-react'
import MediaCardContainer from './MediaCardContainer'

const CategoryCard = (props) => {

    const title=props.categoryObject.name
    return (
        <div>
            <br></br>
            <br></br>
                <Header attached='top'>{title}</Header>
                <Segment attached>
                    <MediaCardContainer title={props.title} genreList={props.genreList} categoryObject={props.categoryObject} mediaList={props.mediaList} setMedia={props.setMedia}/>
                </Segment>
        </div>
    )
}

export default CategoryCard
