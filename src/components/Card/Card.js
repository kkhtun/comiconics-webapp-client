import "./Card.scss";

function Card({ comic }) {
    const { title, description, thumbnail, genres } = comic;
    return (
        <div className="card" title={description}>
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
