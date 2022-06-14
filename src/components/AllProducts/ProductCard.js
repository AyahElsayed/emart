import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom";

const ProductCard = ({ itemdata, addToCart }) => {
  return (
    <>
      <Card style={{ width: '90%' }} key={itemdata.id} className='h-100 d-flex justify-content-center' >
        <Card.Img
          variant="top"
          src={itemdata.image}
          style={{ height: '200px', width: '61%' }}
          className=' m-auto' />
        <Card.Body >
          <Card.Title className='d-flex justify-content-center' >
            {itemdata.title.substring(0, 12)}...
          </Card.Title>
          <Card.Text className='text-muted text-center'>
            <p> ${itemdata.price}</p>
          </Card.Text>
          <Card.Text className='d-flex justify-content-center flex-column align-items-center'>
            <Link to={`/product/${itemdata.id}`}>
              <Button variant="secondary" className="my-1"
              >Show details
              </Button>
            </Link>
            <Button variant="secondary"
              onClick={() => addToCart()}
            >Add to cart
              <MdAddShoppingCart className='m-1' />
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductCard