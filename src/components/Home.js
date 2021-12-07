import api from "../communication/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const [customer, setCustomer] = useState(localStorage.getItem("customer"));
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        setCustomer(localStorage.getItem("customer"));
        if (flowers.length === 0) {
            api.getFlowers().then((x) => {
                //console.log("log", x);
                setFlowers(x);
            });
        }
    });
    return (
        <section id="content">
            <div className="container">
                <div className="title text-center">
                    <h1 className="display-1">Flowers</h1>
                    {!customer ? (
                        <div>
                            <p>Choose a Flower to take the Quiz.</p>
                            <a href="#signup">Sign In</a> to save your score!
                        </div>
                    ) : (
                        <p>Choose a Flower to take the Quiz.</p>
                    )}
                </div>
                {flowers.map((item) => {
                    return (
                        <div className="row mt-2" key={item.name}>
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="card text-center mt-2">
                                    <Link to={`/quiz/${item.name}`}>
                                        <img
                                            src={item.picture}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
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
