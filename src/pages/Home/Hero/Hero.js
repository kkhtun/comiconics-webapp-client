import "./Hero.scss";
import { Link } from "react-scroll";
import { useEffect } from "react";
import { useState } from "react";

function Hero() {
    const [hero] = useState({});
    useEffect(() => {
        // const fetchNaruto = async () => {
        //     let url = `${environment.url}/api/v1/comics?limit=1&skip=0&search=naruto`;
        //     const response = await axios.get(url);
        //     if (response.data.data.length > 0) {
        //         setHero(response.data.data[0]);
        //     }
        // };
        // fetchNaruto().catch((err) => {
        //     console.log(err);
        //     toast(err.response?.data?.message || "Something went wrong");
        // });
    }, []);
    return (
        <section className="heroSection">
            <div className="container">
                <div className="heroCard row">
                    <div className="col-12 col-md-6 heroTextCol">
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
                    <div
                        className="col-12 col-md-6 coverImgCol"
                        style={
                            hero.thumbnail
                                ? {
                                      backgroundImage: `url(${hero.thumbnail})`,
                                  }
                                : {}
                        }
                    >
                        <span>Read Latest Episodes #</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
