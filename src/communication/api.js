let backendBaseUrl = "http://localhost:4002";
let getFlowers = () => {
    return fetch(`${backendBaseUrl}/flowers`).then((x) => x.json());
};

let getQuiz = (name) => {
    return fetch(`${backendBaseUrl}/quiz/${name}`).then((x) => x.json());
};

let saveScore = (quizTaker, quizName, score) => {
    return fetch(`${backendBaseUrl}/score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizTaker, quizName, score }),
    }).then((x) => x.json());
};

let login = (email, password) => {
    return fetch(`${backendBaseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    }).then((x) => x.json());
};

let register = (name, email, password) => {
    return fetch(`${backendBaseUrl}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    }).then((x) => x.json());
};

let api = {
    getFlowers: getFlowers,
    getQuiz: getQuiz,
    saveScore: saveScore,
    login: login,
    register: register,
};
export default api;
