import { useCallback, useEffect, useState, useContext } from "react";
import environment from "../../environment";
import Grid from "../../components/Grid/Grid";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "./Filter/Filter";
import "./Genres.scss";
import { LoaderContext } from "../../contexts/loader.context";

function Genres() {
    const { setLoading } = useContext(LoaderContext);

    const [comics, setComics] = useState([]);
    const [count, setCount] = useState(0);
    const [skip, setSkip] = useState(0);
    const [genres, setGenres] = useState([]);
    const [search, setSearch] = useState("");
    const limit = 10;

    const onPageChange = ({ skip }) => {
        setSkip(skip);
        fetchComics().catch(console.error);
    };

    const onFilter = ({ genres, search }) => {
        setSkip(0);
        setGenres(genres || []);
        setSearch(search || "");
        fetchComics().catch(console.error);
    };

    const fetchComics = useCallback(async () => {
        setLoading(true);
        let url = `${environment.url}/api/v1/comics?limit=${limit}&skip=${skip}`;
        if (genres.length) url += `&genres=${genres.join(",")}`;
        if (search) url += `&search=${search}`;

        const res = await fetch(url);
        const { data, count } = await res.json();
        setComics(data);
        setCount(count);
        setLoading(false);
    }, [setLoading, skip, limit, genres, search]);

    useEffect(() => {
        fetchComics().catch(console.error);
    }, [fetchComics]);

    return (
        <div className="genresWrapper">
            <Filter onFilter={onFilter} />
            <div className="container mt-5">
                <Grid comics={comics} />
                <div className="my-4">
                    <Pagination
                        limit={limit}
                        count={count}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Genres;
