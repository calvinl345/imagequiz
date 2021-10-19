import {
    Container,
    Row,
    Col,
    Card,
    Image,
    Button,
    ListGroup,
} from "react-bootstrap";
import quizzes from "../data";
import { useHistory, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Quiz = (props) => {
    //console.log(quizzes);
    const history = useHistory();
    const [customer, setCustomer] = useState(localStorage.getItem("customer"));
    const [userScore, setUserScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const { quizName } = useParams();
    const questions = quizzes.find((questionArray) =>
        questionArray.find((question) => question.answer === quizName)
    );
    //console.log(questions);
    let nextQuestion = (selectedChoice) => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setGameOver(true);
        }
        if (questions[currentIndex].answer === selectedChoice) {
            setScore(score + 1);
        }
    };

    let restartQuiz = () => {
        setCurrentIndex(0);
        setGameOver(false);
        setScore(0);
    };

    const saveScore = () => {
        localStorage.setItem("userScore", score);
        props.onUserScoreSet();
        console.log("score saved to local storage");
        setUserScore(score);

        history.push({ pathname: "/" });
    };

    let shuffle = (array) => {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    };

    useEffect(() => {
        setCustomer(localStorage.getItem("customer"));
    });
    return (
        <Container>
            {!gameOver ? (
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image
                                src={questions[currentIndex].picture}
                            ></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup>
                                {shuffle(questions[currentIndex].choices).map(
                                    (choice) => (
                                        <ListGroup.Item
                                            key={choice}
                                            onClick={() => nextQuestion(choice)}
                                            action
                                            variant="primary"
                                        >
                                            {choice}
                                        </ListGroup.Item>
                                    )
                                )}
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>score: {score}</Col>
                    </Row>
                </Container>
            ) : (
                ""
            )}

            {gameOver ? (
                <Container>
                    <Card className="text-center">
                        <Card.Header>The quiz is over</Card.Header>
                        <Card.Body>
                            <Card.Title>Score: {score}</Card.Title>
                            <Card.Text>What do you want to do next?</Card.Text>
                            <Button onClick={restartQuiz}>Restart</Button>
                            {customer ? (
                                <Button onClick={saveScore}>Save Score</Button>
                            ) : (
                                ""
                            )}
                            <Link to="/">
                                {" "}
                                <Button>Go Home</Button>{" "}
                            </Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            2 days ago
                        </Card.Footer>
                    </Card>
                </Container>
            ) : (
                ""
            )}
        </Container>
    );
};
export default Quiz;
