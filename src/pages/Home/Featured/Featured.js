import Grid from "../../../components/Grid/Grid";
import "./Featured.scss";

function Featured() {
    return (
        <div className="container">
            <section className="featuredWrapper">
                <h2>Featured This Week</h2>
                <Grid />
            </section>
        </div>
    );
}

export default Featured;
