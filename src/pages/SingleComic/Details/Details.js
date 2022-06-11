import "./Details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faBookmark,
    faList,
    faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import axios from "axios";
import environment from "../../../environment";
import { useEffect, useState } from "react";

function Details({ comic }) {
    const [hasLiked, setHasLiked] = useState(false);
    const {
        _id,
        title,
        description,
        thumbnail,
        chaptersCount,
        genres,
        likeCount,
        liked,
        updatedAt,
    } = comic;

    useEffect(() => {
        setHasLiked(!!liked);
    }, [comic, liked]);

    const likeOrUnlikeComic = async (comic_id) => {
        const { data } = await axios.patch(
            `${environment.url}/api/v1/comics/${comic_id}/likes`
        );
        setHasLiked(data.liked);
    };
    return (
        <section className="singleComicDetails mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="coverImage">
                        <img src={thumbnail} alt="dummy" />
                    </div>
                    <div className="comicButtons mt-2">
                        {hasLiked === true ? (
                            <button
                                className="likeComicButton likedComicButton"
                                onClick={() => likeOrUnlikeComic(_id)}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                                <span>&nbsp;Liked</span>
                            </button>
                        ) : (
                            <button
                                className="likeComicButton"
                                onClick={() => likeOrUnlikeComic(_id)}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                                <span>&nbsp;Like</span>
                            </button>
                        )}
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
                        <span>{likeCount}</span>
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
