import { useCallback, useEffect, useState } from "react";
import environment from "../../../environment";
import Grid from "../../../components/Grid/Grid";
import "./Featured.scss";

function Featured() {
    const [comics, setComics] = useState([]);
    const fetchLatestComics = useCallback(async () => {
        const res = await fetch(environment.url + "/api/v1/comics?limit=10");
        const { data } = await res.json();
        setComics(data);
    }, []);

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
