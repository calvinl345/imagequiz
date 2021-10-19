import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";

const Menu = (props) => {
    const [customer, setCustomer] = useState(localStorage.getItem("customer"));
    const [userScore, setUserScore] = useState(
        localStorage.getItem("userScore")
    );
    const logoff = () => {
        localStorage.removeItem("customer");
        localStorage.removeItem("userScore");
        setCustomer(undefined);
    };

    useEffect(() => {
        setCustomer(localStorage.getItem("customer"));
        setUserScore(localStorage.getItem("userScore"));
    });

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">My App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#">Home</Nav.Link>

                    {customer ? (
                        <Nav.Link href="#signup" on onClick={logoff}>
                            log Off
                        </Nav.Link>
                    ) : (
                        <Nav.Link href="#login">Sign In</Nav.Link>
                    )}
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                    {customer ? (
                        <Navbar.Text>
                            Signed in as:{" "}
                            <span>
                                <a href="#">{customer}</a> High Score:{" "}
                                {userScore}
                            </span>
                        </Navbar.Text>
                    ) : (
                        ""
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
