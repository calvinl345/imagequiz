import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
        setIsAuthenticated(true);
        return null;
    };
    const onUserScoreSet = () => {
        if (userScoreSet === true) {
            setUserScoreSet(false);
        } else {
            setUserScoreSet(true);
        }
        return null;
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
                    <Route path="/quiz/:quizName">
                        <Quiz onUserScoreSet={onUserScoreSet} />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
