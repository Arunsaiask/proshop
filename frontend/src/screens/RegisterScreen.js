import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  FormLabel,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/MessageAlert";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <>
      <FormContainer>
        <h1>Sign Up</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            ></FormControl>
          </Form.Group>
          <Form.Group controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
          </Form.Group>
          <Form.Group controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            ></FormControl>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              type="password"
              value={confirmPassword}
              placeholder="Enter password"
              onChange={(e) => setconfirmPassword(e.target.value)}
            ></FormControl>
          </Form.Group>
          <Button className="my-3" variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an account ? {""}
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
