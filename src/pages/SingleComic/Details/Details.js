import "./Details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faBookmark,
    faList,
    faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../../../assets/demon-slayer.jpg";

function Details() {
    return (
        <section className="singleComicDetails mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="coverImage">
                        <img src={Image} alt="dummy" />
                    </div>
                    <div className="comicButtons mt-2">
                        <button className="likeComicButton">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>&nbsp;Like</span>
                        </button>
                        {/* <button className="likeComicButton likedComicButton">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>&nbsp;Liked</span>
                </button> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center comicTitle">
                        The One Where Comic Title Is The Largest
                    </h1>
                    <p className="comicDescription mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec placerat, nibh porta sollicitudin eleifend, velit
                        mi vehicula dui, in ornare libero augue tristique dolor.
                        Nunc risus sem, condimentum at lacinia sed, varius sit
                        amet massa. Nulla nec efficitur eros. Nunc egestas
                        accumsan nibh, sit amet auctor est mattis volutpat.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. <br /> Nunc malesuada elit sed velit
                        consectetur dictum. Phasellus nec ligula efficitur,
                        sollicitudin ligula vitae, pellentesque odio.
                        Pellentesque non metus tellus. Donec facilisis neque
                        dolor, et porta ex placerat vel. Aliquam ultricies, orci
                        nec sollicitudin rutrum, mi odio gravida mauris, eget
                        lacinia justo metus a enim. In rhoncus, eros vel finibus
                        sodales, eros neque aliquet ex, non tincidunt velit
                        lacus sit amet tellus. Praesent vel ligula et enim
                        gravida eleifend. Cras vitae urna placerat, ullamcorper
                        nisi ut, condimentum est. Cras aliquet enim libero,
                        tristique malesuada nulla varius at. Ut rutrum lacus sed
                        faucibus vehicula.{" "}
                    </p>
                </div>
                <div className="col-md-3 comicMetadata">
                    <div>
                        <span className="metadataIcons">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        &nbsp;Likes&nbsp;:&nbsp;
                        <span>23</span>
                    </div>
                    <div>
                        <span className="metadataIcons">
                            <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        &nbsp;Chapters&nbsp;:&nbsp;
                        <span>4</span>
                    </div>
                    <div>
                        <span className="metadataIcons">
                            <FontAwesomeIcon icon={faList} />
                        </span>
                        &nbsp;Genres&nbsp;:&nbsp;
                        <span>Action | Adventure</span>
                    </div>
                    <div>
                        <span className="metadataIcons">
                            <FontAwesomeIcon icon={faClockRotateLeft} />
                        </span>
                        &nbsp;Last Updated&nbsp;:&nbsp;
                        <span>4</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;
