import "./SingleComic.scss";
import Chapters from "./Chapters/Chapters";
import Details from "./Details/Details";
import Comments from "./Comments/Comments";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState, useContext } from "react";
import environment from "../../environment";
import { LoaderContext } from "../../contexts/loader.context";
import axios from "axios";

function SingleComic() {
    const { comic_id } = useParams();
    const [comic, setComic] = useState({});
    const { setLoading } = useContext(LoaderContext);

    const fetchComic = useCallback(async () => {
        setLoading(true);
        const { data } = await axios.get(
            `${environment.url}/api/v1/comics/${comic_id}`
        );
        setComic(data);
        setLoading(false);
    }, [comic_id, setLoading]);

    useEffect(() => {
        fetchComic().catch(console.error);
    }, [fetchComic]);

    return (
        <div className="singleComicWrapper">
            <section className="singleComicHeader"></section>
            <div className="container">
                <Details comic={comic} />
                <Chapters comic={comic} />
                <Comments />
            </div>
        </div>
    );
}

export default SingleComic;
