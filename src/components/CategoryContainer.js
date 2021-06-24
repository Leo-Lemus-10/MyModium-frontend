import React, { Component } from 'react'
import CategoryCard from './CategoryCard'
import { Card } from 'semantic-ui-react'

export class CategoryContainer extends Component {
    render() {
        return (
            <Card.Group>
                {this.props.categoriesList.map(categoryObject => <CategoryCard key={categoryObject.id} categoryObject={categoryObject}/>)}
            </Card.Group>
        )
    }
}

export default CategoryContainer
