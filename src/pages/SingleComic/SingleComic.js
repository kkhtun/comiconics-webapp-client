import "./SingleComic.scss";
import Chapters from "./Chapters/Chapters";
import Details from "./Details/Details";
import Comments from "./Comments/Comments";

function SingleComic() {
    return (
        <div className="singleComicWrapper">
            <section className="singleComicHeader"></section>
            <div className="container">
                <Details />
                <Chapters />
                <Comments />
            </div>
        </div>
    );
}

export default SingleComic;
