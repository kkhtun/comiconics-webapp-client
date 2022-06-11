import "./Details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faBookmark,
    faList,
    faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function Details({ comic }) {
    const { title, description, thumbnail, chaptersCount, genres, updatedAt } =
        comic;
    return (
        <section className="singleComicDetails mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="coverImage">
                        <img src={thumbnail} alt="dummy" />
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
                    <h1 className="text-center comicTitle">{title}</h1>
                    <p className="comicDescription mt-5">{description}</p>
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
                        <span>{chaptersCount}</span>
                    </div>
                    <div>
                        <span className="metadataIcons">
                            <FontAwesomeIcon icon={faList} />
                        </span>
                        &nbsp;Genres&nbsp;:&nbsp;
                        <span>
                            {genres
                                ? genres.map((g) => g.name).join(" | ")
                                : ""}
                        </span>
                    </div>
                    <div>
                        <span className="metadataIcons">
                            <FontAwesomeIcon icon={faClockRotateLeft} />
                        </span>
                        &nbsp;Last Updated&nbsp;:&nbsp;
                        <span>{moment(updatedAt).fromNow()}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;
