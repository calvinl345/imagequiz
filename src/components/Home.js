import flowers from "../flowers";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const [customer, setCustomer] = useState(localStorage.getItem("customer"));
    useEffect(() => {
        setCustomer(localStorage.getItem("customer"));
    });
    return (
        <section id="content">
            <div class="container">
                <div class="title text-center">
                    <h1 class="display-1">Flowers</h1>
                    {!customer ? (
                        <p>
                            <div>Choose a Flower to take the Quiz.</div>
                            <a href="/signup">Sign In</a> to save your score!
                        </p>
                    ) : (
                        <p>Choose a Flower to take the Quiz.</p>
                    )}
                </div>
                {flowers.map((item) => {
                    return (
                        <div class="row mt-2">
                            <div class="col-md-4"></div>
                            <div class="col-md-4">
                                <div class="card text-center mt-2">
                                    <Link to={`/quiz/${item.name}`}>
                                        <img
                                            src={item.picture}
                                            class="card-img-top"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {item.name}
                                            </h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Home;
