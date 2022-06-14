import React from 'react'
import { useState, useEffect } from 'react';
import { Product } from '../../services/product';
import { useParams } from 'react-router'
import { Row, Col, Button, } from "react-bootstrap";
import { AiFillStar } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md';

const SingleProduct = ({ addToCart }) => {

  const [product, setProduct] = useState([])
  const [lodaing, setLodaing] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    Product({ id })
      .then((res) => {
        console.log('single product', res.data)
        setProduct(res.data)
        setLodaing(false)
      })
      .catch((error) => {
        console.log("product error", error);
      });
  }, [])

  const ShowProduct = () => {
    return (
      <>
        <div className="container mt-5">
          <Row className="justify-content-center mt-5 ">
            <Col className="mb-4 d-flex justify-content-center" >
              <img src={product.image} alt={product.title} style={{ width: '50%' }} />
            </Col>
            <Col className="mt-3" >
              <h4 className="text-uppercase text-black-50">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p>Rating  {product.rating && product.rating.rate}
                <AiFillStar />
              </p>
              <h3 className="display-6 fw-bold my-3">$ {product.price}</h3>
              <p className="lead">{product.description}</p>
              <Button
                variant="secondary"
                onClick={() => addToCart()}>
                Add to cart
                <MdAddShoppingCart className='m-1' />
              </Button>
            </Col>
          </Row>
        </div>
      </>
    )
  }
  return (
    <>
      {
        lodaing ? 'loading...'
          :
          <ShowProduct />
      }
    </>
  )
}

export default SingleProduct