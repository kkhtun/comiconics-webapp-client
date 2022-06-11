import { useNavigate } from "react-router-dom";
import "./Card.scss";

function Card({ comic }) {
    const navigate = useNavigate();
    const { _id, title, description, thumbnail, genres } = comic;

    const navigateToComic = () => {
        navigate(`/comics/${_id}`);
    };
    return (
        <div className="card" title={description} onClick={navigateToComic}>
            <div className="cardActiveMask"></div>
            <h3 className="cardTitleHidden">{title}</h3>
            <div
                className="cardHeader"
                style={{
                    backgroundImage: `url(${thumbnail})`,
                }}
            >
                <span className="cardLikes">
                    {Math.floor(Math.random() * 100)} Likes
                </span>
            </div>
            <div className="cardText">
                <h3>{title}</h3>
                <span>{genres.map((g) => g.name).join(" | ")}</span>
            </div>
        </div>
    );
}

export default Card;
