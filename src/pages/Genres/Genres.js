import { useEffect, useState } from "react";
import environment from "../../environment";
import Grid from "../../components/Grid/Grid";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "./Filter/Filter";
import "./Genres.scss";
import { useFetchList } from "../../hooks/fetch.hook";

function Genres() {
    const { response, setQueries } = useFetchList({
        url: `${environment.url}/api/v1/comics`,
    });

    const [comics, setComics] = useState([]);
    const [count, setCount] = useState(0);
    const limit = 10;

    useEffect(() => {
        setComics(response.data);
        setCount(response.count);
    }, [response]);

    const onPageChange = ({ skip }) => {
        setQueries((prevQueries) => ({ ...prevQueries, skip }));
    };

    const onFilter = ({ genres, search }) => {
        let queries = { skip: 0, limit };
        if (genres.length) {
            queries = { ...queries, genres: genres.join(",") };
        }
        if (search) {
            queries = { ...queries, search };
        }
        setQueries(queries);
    };

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
