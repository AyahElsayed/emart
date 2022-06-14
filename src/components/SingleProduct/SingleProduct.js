import React from 'react'
import { useState, useEffect } from 'react';
import { Product } from '../../services/product';
import { useParams } from 'react-router'

const SingleProduct = () => {

  const [product, setProduct] = useState([])
  const [lodaing, setLodaing] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    Product({id})
      .then((res) => {
        console.log('single product', res.data)
        setProduct(res.data)
        setLodaing(false)
      })
      .catch((error) => {
        console.log("product error", error);
      });
  }, [])

  return (
    <>
      {
        lodaing ? 'loading...'
        :
        <h1>product name {product.title} </h1>
      }
    </>
  )
}

export default SingleProduct