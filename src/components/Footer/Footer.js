import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle,
    faReddit,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <section className="footerWrapper">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-6 footerText">
                        <div>
                            <h1 className="logoText">Comiconics</h1>
                            <p>
                                Comiconics is the thriving ground for aspiring
                                artists and comic enthusiasts from Myanmar and
                                SEA countries.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 footerSocial">
                        <div>
                            <p className="text-center">Contact Us On</p>
                            <div className="socialIcons">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faGoogle} />
                                <FontAwesomeIcon icon={faReddit} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center copyright">Comiconics 2022</div>
            </div>
        </section>
    );
}

export default Footer;
