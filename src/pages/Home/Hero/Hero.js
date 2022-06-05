import "./Hero.scss";
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
                            <button>Start Reading</button>
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
