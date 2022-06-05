import "./Grid.scss";
import Card from "../Card/Card";

function Grid() {
    const nums = [1, 2, 3, 4, 5, 6];
    return (
        <div className="gridWrapper">
            <div className="row g-2">
                {nums.map((n) => (
                    <div key={n} className="col-lg-3 col-md-4">
                        <Card />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;
