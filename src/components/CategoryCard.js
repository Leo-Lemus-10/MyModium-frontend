import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import MediaCardContainer from './MediaCardContainer'

const CategoryCard = (props) => (
    <div>
        <MediaCardContainer mediaList={this.props.mediaList} setMedia={this.props.setMedia}/>        
    </div>
)

export default CategoryCard
