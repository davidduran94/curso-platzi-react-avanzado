import React, {Fragment} from 'react'
import {ListOfPhotoCards} from '../components/ListOfPhotoCards'
import {ListOfCategories} from '../components/ListOfCategories'


export const Home = () => {
    return(
    <Fragment>
        <ListOfCategories/>
        <ListOfPhotoCards/>
    </Fragment>
    )
    
} 