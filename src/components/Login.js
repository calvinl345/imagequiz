import { Row, Col, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import customers from "../stores/customers";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    let login = (e) => {
        let found = customers.find(
            (x) => (x.username === username) & (x.password === password)
        );
        if (found) {
            console.log(found);
            localStorage.setItem("customer", username);
            history.push({ pathname: "/" });
            props.onCustomerlogin();
        } else {
            alert("User not found. Please Sign Up.");
            history.push({ pathname: "/signup" });
        }
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
                <h1>Sign In</h1>
            </Row>
            <Row>
                <Col sm="auto">
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
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
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={onPasswordChanged}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
