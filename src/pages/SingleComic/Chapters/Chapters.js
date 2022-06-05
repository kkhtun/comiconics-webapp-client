import "./Chapters.scss";
import Image from "../../../assets/hero-featured.jpg";

function ChapterCard() {
    return (
        <div className="chapterCard row g-0">
            <div className="col-3">
                <img src={Image} alt="chapter cover" />
            </div>
            <div className="col-9 chapterText">
                <span>Chapter 3</span>
                <h3>
                    This is the episode title that will show the title hehe heee
                    heehe hee hehe hehe
                </h3>
            </div>
        </div>
    );
}

function Chapters() {
    const data = [1, 2, 3, 4];
    return (
        <section className="mt-5 chaptersWrapper">
            <h2 className="chaptersHeading">Chapters (4)</h2>
            <div className="row g-2">
                {data.map((d) => (
                    <div className="col-md-4" key={d}>
                        <ChapterCard />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Chapters;
