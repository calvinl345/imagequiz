let backendBaseUrl = "http://localhost:4002";
let getFlowers = () => {
    return fetch(`${backendBaseUrl}/flowers`).then((x) => x.json());
};

let getQuiz = (name) => {
    return fetch(`${backendBaseUrl}/quiz/${name}`).then((x) => x.json());
};

let saveScore = (email, quizName, score) => {
    return fetch(`${backendBaseUrl}/score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, quizName, score }),
    }).then((x) => x.json());
};

let api = { getFlowers: getFlowers, getQuiz: getQuiz, saveScore: saveScore };
export default api;
