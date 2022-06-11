import "./SingleComic.scss";
import Chapters from "./Chapters/Chapters";
import Details from "./Details/Details";
import Comments from "./Comments/Comments";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import environment from "../../environment";
import Loader from "../../components/Loader/Loader";

function SingleComic() {
    const { comic_id } = useParams();
    const [comic, setComic] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchComic = useCallback(async () => {
        setIsLoading(true);
        const res = await fetch(`${environment.url}/api/v1/comics/${comic_id}`);
        const data = await res.json();
        setComic(data);
        setIsLoading(false);
    }, [comic_id]);

    useEffect(() => {
        fetchComic().catch(console.error);
    }, [fetchComic]);

    return (
        <div className="singleComicWrapper">
            <section className="singleComicHeader"></section>
            <Loader isLoading={isLoading} />
            <div className="container">
                <Details comic={comic} />
                <Chapters comic={comic} />
                <Comments />
            </div>
        </div>
    );
}

export default SingleComic;
