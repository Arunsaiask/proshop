import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/MessageAlert.js";
import Loader from "../components/Loader.js";
import FormContainer from "../components/FormContainer.js";
import { login } from "../actions/userActions.js";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  //used in place of history.push
  const navigate = useNavigate();

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;

  useEffect(
    (e) => {
      if (userInfo) {
        navigate(redirect);
      }
    },
    [navigate, redirect, userInfo]
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In </h1>
      {error && <Message variant="danger"> {error} </Message>}
      {/* // always loading when no password */}
      {loading && <Loader />} 
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter passsword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button className="my-3" type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row>
        <Col>
          New Customer ? {""}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
