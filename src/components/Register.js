import { Row, Col, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import customers from "../stores/customers";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    let saveCustomer = (e) => {
        e.preventDefault();
        customers.push({ username: username, password: password });
        console.log("creds saved");
        history.push("/login");
    };
    let onUsernameChanged = (e) => {
        setUsername(e.target.value);
    };
    let onPasswordChanged = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Container>
            <Row>
                <h1>Sign Up</h1>
            </Row>
            <Row>
                <Col sm="auto">
                    <Form onSubmit={saveCustomer}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Choose a Username (your email adress)
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={username}
                                onChange={onUsernameChanged}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Choose a Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={onPasswordChanged}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
