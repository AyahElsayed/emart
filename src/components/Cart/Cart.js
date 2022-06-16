import React from "react";
import { Row, Col, Button, } from "react-bootstrap";

const Cart = ({ cartItems, deleteFromCart }) => {

  return (
    < >
      {
        cartItems.length > 0 ?
          <div style={{ height: '100vh' }}>
            {cartItems.map((product) => (
              <div className="container mt-5 " >
                <Row className=" mt-5 ">
                  <Col className=" d-flex" >
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: '10%' }}
                      className="mx-5"
                    />
                    <div className=" d-flex flex-column mt-2">
                      <h1 className="display-6 fs-2">{product.title}</h1>
                      <h3 className="display-7 my-3">$ {product.price}</h3>
                      <Button
                        variant="danger"
                        className=""
                        style={{ width: '80px' }}
                        onClick={() => deleteFromCart(product)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
          : <p style={{ height: '100vh' }}>"no items in your cart, shopping now!"</p>

      }
    </>
  );
};

export default Cart;