import "./Grid.scss";
import Card from "../Card/Card";

function Grid({ comics = [] }) {
    return (
        <div className="gridWrapper">
            <div className="row g-2">
                {comics.map((comic) => (
                    <div key={comic._id} className="col-lg-3 col-md-4">
                        <Card comic={comic} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;
