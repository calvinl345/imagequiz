import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userScoreSet, setUserScoreSet] = useState(false);
    const onCustomerlogin = () => {
        console.log("onCustomerLogin");
        setIsAuthenticated(true);
    };
    const onUserScoreSet = () => {
        if (userScoreSet === true) {
            setUserScoreSet(false);
        } else {
            setUserScoreSet(true);
        }
    };
    return (
        <Router>
            <Container>
                <Row>
                    <Col>
                        <Menu
                            isAuthenticated={isAuthenticated}
                            userScoreSet={userScoreSet}
                            onUserScoreSet={onUserScoreSet}
                        />
                    </Col>
                </Row>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/signup" component={Register} />
                    <Route path="/login">
                        <Login onCustomerlogin={onCustomerlogin} />
                    </Route>
                    <PrivateRoute path="/quiz/:quizName">
                        <Quiz onUserScoreSet={onUserScoreSet} />
                    </PrivateRoute>
                </Switch>
            </Container>
        </Router>
    );
};

let PrivateRoute = ({ children, ...rest }) => {
    let customer = localStorage.getItem("customer");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                customer ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default App;
