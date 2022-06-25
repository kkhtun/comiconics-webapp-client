import "./Read.scss";
import { useCallback, useEffect, useState, useContext } from "react";
import environment from "../../environment";
import Pagination from "../../components/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { LoaderContext } from "../../contexts/loader.context";

function Read() {
    const { chapter_id } = useParams();
    const { setLoading } = useContext(LoaderContext);

    const [title, setTitle] = useState("");
    const [pages, setPages] = useState([]);
    const [scrollMode, setScrollMode] = useState(false);

    // for single page mode
    const [currentPage, setCurrentPage] = useState(0);
    const onPageChange = ({ page }) => {
        setCurrentPage(page);
    };

    // Calling API
    const fetchPages = useCallback(async () => {
        setLoading(true);
        console.log("fetch pages");
        const res = await fetch(
            environment.url + `/api/v1/chapters/${chapter_id}`
        );
        const { pages, comic_id, title: chapterTitle } = await res.json();
        if (comic_id.title) setTitle(comic_id.title + " / " + chapterTitle);
        pages && setPages(pages);
        setCurrentPage(0);
        setLoading(false);
    }, [chapter_id, setLoading]);

    useEffect(() => {
        fetchPages().catch(console.error);
    }, [fetchPages]);

    return (
        <div className="readWrapper">
            <section className="readToolbar">
                <h4>{title}</h4>
                <div className="pageNavigator">
                    {scrollMode ? (
                        <></>
                    ) : (
                        <Pagination
                            onPageChange={onPageChange}
                            count={pages.length}
                            limit={1}
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
    const { setLoading } = useContext(LoaderContext);
    useEffect(() => {
        if (page) {
            setLoading(true);
            console.log("single page fetch");
            fetch(page)
                .then((response) => response.blob())
                .then((image) => {
                    // Create a local URL of that image
                    const localUrl = URL.createObjectURL(image);
                    setImage(localUrl);
                    setLoading(false);
                });
        }
    }, [page, setLoading]);
    return (
        <div className="singlePageView">
            {image ? <img src={image} alt="page" /> : <></>}
        </div>
    );
}

export default Read;
