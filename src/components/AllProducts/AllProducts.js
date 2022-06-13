import React, { useEffect, useState } from "react";
import { allProducts } from '../../services/products'
import { Container, Row, Col, Spinner, ButtonGroup, Button } from 'react-bootstrap';
import ProductCard from "./ProductCard";


const AllProducts = () => {

  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    allProducts().then(res => {
      console.log('products =>', res.data);
      setProductsData(res.data)
      setIsLoading(false)
    }).catch((error) => {
      console.log('products error', error);
    });
  }, [])

  return (
    <>
      <Container fluid className='productsContainer'>
        <h1 className="display-6 fw-bolder text-center mb-5 mt-5">Latest products</h1>
        <ButtonGroup aria-label="Basic example" className="text-center d-block mb-5">
          <Button variant="secondary">All</Button>
          <Button variant="secondary">Men's clothing</Button>
          <Button variant="secondary">Woman's clothing</Button>
          <Button variant="secondary">Jewelery</Button>
          <Button variant="secondary">Electronics</Button>
        </ButtonGroup>
        {isLoading ?
          <Spinner animation="border" className="d-flex m-auto mt-5" />
          :
          <Row className='justify-content-center m-auto' style={{ width: '80%' }}>
            {productsData.map((product) => (
              <Col sm={12} md={5} lg={3} className="mb-4 d-flex justify-content-center" key={product.id} >
                <ProductCard itemdata={product} />
              </Col>
            ))}
          </Row>
        }

      </Container>
    </>
  )
}

export default AllProducts