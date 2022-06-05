import "./Card.scss";

function Card() {
    return (
        <div className="card">
            <div className="cardActiveMask"></div>
            <h3 className="cardTitleHidden">
                This is the comic title hehe hehe very long haha
            </h3>
            <div className="cardHeader">
                <span className="cardLikes">
                    {Math.floor(Math.random() * 100)} Likes
                </span>
            </div>
            <div className="cardText">
                <h3>
                    This is the comic title hehe hehe hehe hehe title title
                    title
                </h3>
                <span>Action | Slice of Life | Adventure | Lifestyle</span>
            </div>
        </div>
    );
}

export default Card;
