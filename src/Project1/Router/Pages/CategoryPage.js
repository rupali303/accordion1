import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Products from './Products'

function CategoryPage() {

    const{type}=useParams()

    const [category, setCategory] = useState([])

    useEffect(() => {
     const getCategory=async()=>{
      const responce =await  fetch(`https://fakestoreapi.com/products/category/${type}`)
        const data = await responce.json()
        setCategory(data)
     }
     getCategory()
    }, [])

  return (
    <>
    {category && <Products products={category}/>}
    </>
  )
}

export default CategoryPage