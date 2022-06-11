import { useNavigate } from "react-router-dom";
import "./Chapters.scss";

function ChapterCard({ chapter, fallbackThumbnail }) {
    const navigate = useNavigate();

    return (
        <div
            className="chapterCard row g-0"
            onClick={() => navigate("/read/" + chapter._id)}
        >
            <div className="col-3">
                <img
                    src={chapter.thumbnail || fallbackThumbnail}
                    alt="chapter cover"
                />
            </div>
            <div className="col-9 chapterText">
                <span>{chapter.title}</span>
                <h3>{chapter.description}</h3>
            </div>
        </div>
    );
}

function Chapters({ comic }) {
    const { chapters, chaptersCount, thumbnail } = comic;
    return (
        <section className="mt-5 chaptersWrapper">
            <h2 className="chaptersHeading">Chapters ({chaptersCount})</h2>
            <div className="row g-2">
                {chapters ? (
                    chapters.map((c) => (
                        <div className="col-md-4" key={c._id}>
                            <ChapterCard
                                chapter={c}
                                fallbackThumbnail={thumbnail}
                            />
                        </div>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </section>
    );
}

export default Chapters;
