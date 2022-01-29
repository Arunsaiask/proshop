import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import MessageAlert from "../components/MessageAlert";
import { getProductList } from "../actions/productListActions";

const HomeScreen = () => {
  // a hook to dispatch function prev we used connect
  const dispatch = useDispatch();
  // used to get from state like mapStateToProps
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      <h1 className="my-3">LATEST PRODUCTS</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageAlert variant="danger">{error}</MessageAlert>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
