import "./Hero.scss";
import { Link } from "react-scroll";

function Hero() {
    return (
        <section className="heroSection">
            <div className="container">
                <div className="heroCard row">
                    <div className="col-6 heroTextCol">
                        <div>
                            <h1>Comics on the Go!</h1>
                            <p>
                                Read comics anywhere, anytime, <br />
                                with a variety of high quality originals on
                                comiconics.
                            </p>
                            <Link to="featured">
                                <button>Start Reading</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 coverImgCol">
                        <span>Read Latest Episode #2</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
