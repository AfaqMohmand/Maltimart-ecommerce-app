import React from 'react'
import ProductCard from './ProductCard'

 

const ProductsList = ({data,index}) => {
  return (
    <>
    {data.map((item)=>{
        return (
            <ProductCard item={item} key={index} />
        )
    })}
    </>
  )
}

export default ProductsList