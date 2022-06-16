import React from "react";
import { Row, Col, Button, } from "react-bootstrap";

const Cart = ({ cartItems, deleteFromCart, total }) => {

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
            <p className="m-5 display-6 lead fw-bold"> Total price: ${total}</p>
            <Button
              variant="secondary"
              className="mx-5 display-6 fw-bold"
            > Buy now!</Button>
          </div>
          : <p
            className="m-5 lead display-6 p-5"
            style={{ height: '90vh' }}
          >
            You have no items in your shopping cart, start adding some!
          </p>

      }
    </>
  );
};

export default Cart;