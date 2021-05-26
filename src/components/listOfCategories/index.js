import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { categories as categoriesApi} from '../../../api/db.json'
import { List, Item } from './styles'

//custom  HOOK
function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(function () {
        // window.fetch('https://petgram-server.midudev.now.sh/categories')
        //   .then(res => res.json())
        //   .then(response => {
        //     setCategories(response)
        //   })
        console.log(categoriesApi)
        setLoading(true)
        setTimeout( () => {
            setCategories(categoriesApi) 
            setLoading(false) 
         } , 500);
      }, [])
    
    return {categories, loading}
}


export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  
  useEffect(function () {
    const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ?
        'Loading....'
        : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )


  return (
    <Fragment>
      {renderList()} 
      {showFixed && renderList(true)}
    </Fragment>
  )
}
