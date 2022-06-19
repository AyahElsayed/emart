import React, { useEffect, useState } from "react";
import { allProducts } from "../../services/products";
import {
  Container,
  Row,
  Col,
  Spinner,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import ProductCard from "./ProductCard";

const AllProducts = ({ addToCart }) => {
  const [productsData, setProductsData] = useState([]);
  const [filter, setFilter] = useState(productsData);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    allProducts()
      .then((res) => {
        // console.log("products =>", res.data);
        setProductsData(res.data);
        setFilter(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("products error", error);
      });
  }, []);



  const filterProduct = (cat) => {
    const updatedList = productsData.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  return (
    <>
      <Container fluid className="productsContainer">
        <h1 className="display-6 fw-bolder text-center mb-5 mt-5">
          Our products
        </h1>
        <ButtonGroup
          aria-label="Basic example"
          className="text-center d-block mb-5">
          <Button
            variant="secondary"
            onClick={() => {
              setFilter(productsData);
            }}>
            All
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              filterProduct("men's clothing");
            }}>
            Men's clothing
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              filterProduct("women's clothing");
            }}>
            Women's clothing
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              filterProduct("jewelery");
            }}>
            Jewelery
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              filterProduct("electronics");
            }}>
            Electronics
          </Button>
        </ButtonGroup>
        {isLoading ? (
          <Spinner animation="border" className="d-flex m-auto mt-5" />
        ) : (
          <Row
            className="justify-content-center m-auto"
            style={{ width: "80%" }}>
            {filter.map((product) => (
              <Col
                sm={12}
                md={5}
                lg={3}
                className="mb-4 d-flex justify-content-center"
                key={product.id}>
                <ProductCard itemdata={product} addToCart={addToCart}/>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default AllProducts;
