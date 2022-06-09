import "./Read.scss";
import { useCallback, useEffect, useState } from "react";
import environment from "../../environment";
import Pagination from "../../components/Pagination/Pagination";

function Read() {
    const [pages, setPages] = useState([]);
    const [scrollMode, setScrollMode] = useState(false);

    // for single page mode
    const [currentPage, setCurrentPage] = useState("");
    const onPageChange = ({ page }) => {
        setCurrentPage(page);
    };

    const fetchPages = useCallback(async () => {
        const res = await fetch(
            environment.url + "/api/v1/chapters/6293316ba0426a76f7d6b966"
        );
        const { pages } = await res.json();
        setPages(pages);
        setCurrentPage(0);
    }, []);

    useEffect(() => {
        fetchPages().catch(console.error);
    }, [fetchPages]);

    return (
        <div className="readWrapper">
            <section className="readToolbar">
                <h4>Comic Title / 3 / Chapter The One</h4>
                <div className="pageNavigator">
                    {scrollMode ? (
                        <></>
                    ) : (
                        <Pagination
                            onPageChange={onPageChange}
                            pageCount={pages.length}
                        />
                    )}
                </div>
                <div className="readModeToggle">
                    <button onClick={() => setScrollMode((prev) => !prev)}>
                        {scrollMode ? "Single Page Mode" : "Scroll Mode"}
                    </button>
                </div>
            </section>
            <section className="container mt-5">
                {scrollMode ? (
                    <Pages pages={pages} />
                ) : (
                    <SinglePage page={pages[currentPage]} />
                )}
            </section>
        </div>
    );
}

function Pages({ pages }) {
    return (
        <div className="pages">
            {pages.length > 0 ? (
                pages.map((page, idx) => (
                    <img key={idx} src={page} alt="page" loading="lazy" />
                ))
            ) : (
                <h2 className="text-center">Loading...</h2>
            )}
        </div>
    );
}

function SinglePage({ page }) {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(page)
            .then((response) => response.blob())
            .then((image) => {
                // Create a local URL of that image
                const localUrl = URL.createObjectURL(image);
                setImage(localUrl);
                setLoading(false);
            });
    }, [page]);
    return (
        <div className="singlePageView">
            {loading ? (
                <h2 className="text-center">Loading Image...</h2>
            ) : (
                <img src={image} alt="page" />
            )}
        </div>
    );
}

export default Read;
