import React, { useEffect, useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import MessageAlert from "../components/MessageAlert";
import { getParticularProduct } from "../actions/productListActions";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

const ProductScreen = ({history}) => {
  //add to cart state 
  const [qty, setQty] = useState(1);
  ///instead of history use navigate
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // get id from req.params and send to action

  const { id } = useParams();

  //using selector to get product from state

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(getParticularProduct(id));
  }, [dispatch, id]);

  const addToCartHandler = ()=>{
       navigate(`/cart/${id}/?qty=${qty}`)
  }

  return (
    <>
      <Link to="/" className="my-3 btn btn-light">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageAlert variant="danger">{error}</MessageAlert>
      ) : (
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
                <Rating product={productDetails.product} />
              </ListGroup.Item>
              <ListGroup.Item>price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card className="my-3">
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
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Select
                          as="select"
                          style={{padding: "0.75rem 0.2rem 0.75rem 0.4rem"}}
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option value={x + 1} key={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item className="d-grid gap-2">
                  <Button
                    onClick = {addToCartHandler}
                    className="btnbtn-dark"
                    type="submit"
                    disabled={product.countInStock === 0 && "disabled"}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
