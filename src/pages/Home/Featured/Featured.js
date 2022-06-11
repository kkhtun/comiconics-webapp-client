import { useCallback, useEffect, useState, useContext } from "react";
import axios from "axios";
import environment from "../../../environment";
import Grid from "../../../components/Grid/Grid";
import "./Featured.scss";
import { LoaderContext } from "../../../contexts/loader.context";

function Featured() {
    const { setLoading } = useContext(LoaderContext);
    const [comics, setComics] = useState([]);

    const fetchLatestComics = useCallback(async () => {
        setLoading(true);
        const { data } = await axios.get(
            environment.url + "/api/v1/comics?limit=10"
        );
        setComics(data ? data.data : []);
        setLoading(false);
    }, [setLoading]);

    useEffect(() => {
        fetchLatestComics().catch(console.error);
    }, [fetchLatestComics]);
    return (
        <div className="container">
            <section className="featuredWrapper" id="featured">
                <h2>Featured This Week</h2>
                <Grid comics={comics} />
            </section>
        </div>
    );
}

export default Featured;
