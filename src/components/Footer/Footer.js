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
                                Comiconics is the thriving ground for new and
                                interesting comics, find your own stories on the
                                go, including short comics, manga, manhwa across
                                different genres.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 footerSocial">
                        <div>
                            <p className="text-center">Contact Us On</p>
                            <div className="socialIcons">
                                <a href="https://www.facebook.com/khaingkhant.htun/">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="mailto:khaingkhanthtun@gmail.com">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="https://www.reddit.com/">
                                    <FontAwesomeIcon icon={faReddit} />
                                </a>
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
