import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import Rating from "../components/Rating";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const ProductScreen = () => {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setproduct(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Link to="/" className="my-3 btn btn-light">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt="product-image" fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating product={product} />
            </ListGroup.Item>
            <ListGroup.Item>price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col className="mx-2">Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "in stock" : "out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-2" >
                  <Button
                    className="btnbtn-dark" 
                    type="submit"
                    disabled={product.countInStock ===0 && "disabled"}
                  >
                    Add to cart
                  </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
