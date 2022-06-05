import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Comments.scss";

function SingleComment() {
    return (
        <div className="singleComment">
            <div className="leftBar"></div>
            <div className="singleCommentText">
                <h5>
                    Alex Win <span>(2 minutes ago)</span>
                </h5>
                <p>
                    This is the comment from Alex Win, written at blah blah
                    blah. blah blah blah Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec placerat, nibh porta sollicitudin
                    eleifend, vel
                </p>
            </div>
        </div>
    );
}

function Comments() {
    return (
        <section className="commentsWrapper">
            <h2 className="commentsHeading">Comments</h2>
            <form className="commentInput">
                <input type="text" placeholder="Write your comment..." />
                <button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
            <div className="comments mt-4">
                {[1, 2, 3].map((n) => (
                    <SingleComment key={n} />
                ))}
                <div className="loadMoreComments mt-5">
                    <button>More Comments</button>
                </div>
            </div>
        </section>
    );
}

export default Comments;
