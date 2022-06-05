import { useCallback, useEffect, useState } from "react";
import environment from "../environment";

function SingleChapterRead() {
    const [pages, setPages] = useState([]);

    const fetchPages = useCallback(async () => {
        const res = await fetch(
            environment.url + "/api/v1/chapters/6293316ba0426a76f7d6b966"
        );
        const { pages } = await res.json();
        setPages(pages);
    }, []);

    useEffect(() => {
        fetchPages().catch(console.error);
    }, [fetchPages]);

    return (
        <div style={{ margin: "200px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {pages.length > 0 ? (
                    pages.map((page, idx) => (
                        <img key={idx} src={page} alt="page" />
                    ))
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </div>
    );
}

export default SingleChapterRead;
