import React, { Component } from 'react'
import CategoryCard from './CategoryCard'
import { Card, Grid} from 'semantic-ui-react'

const CategoryContainer = (props) => {
    const categoryMapper = props.categoryList
    return(
        <Grid columns='one' divided='vertically' >
            <Grid.Column rows={1} >
                <Grid.Row columns={1} >
                    {categoryMapper.map(categoryObject => <CategoryCard key={categoryObject.id} genreList={props.genreList} setMedia={props.setMedia} mediaList={props.mediaList} categoryObject={categoryObject}/>)}
                </Grid.Row>
            </Grid.Column>
        </Grid>
        
    )
}

export default CategoryContainer
