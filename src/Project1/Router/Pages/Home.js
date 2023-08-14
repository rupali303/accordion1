import React, { useEffect, useState } from 'react'
import Products from './Products'
import Category from '../Components/Category'

function Home() {

const [products, setProducts] = useState([])

    useEffect(() => {
     const getProduct=async()=>{
      const responce =await  fetch('https://fakestoreapi.com/products')
        const data = await responce.json()
        setProducts(data)
     }
     getProduct()
    }, [])
    

  return (
    <div>
      <Category/>
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
      </div>
        {products && <Products products={products}/>}
    </div>
  )
}

export default Home