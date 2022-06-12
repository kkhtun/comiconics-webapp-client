import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Comments.scss";
import { useContext, useEffect, useState } from "react";
import { useGetComments } from "../../../hooks/comments.hook";
import axios from "axios";
import environment from "../../../environment";
import { toast } from "react-toastify";
import moment from "moment";
import { AuthContext } from "../../../contexts/auth.context";

function SingleComment({ comment }) {
    const { body, user_id, createdAt } = comment;
    return (
        <div className="singleComment">
            <div className="leftBar"></div>
            <div className="singleCommentText">
                <h5>
                    {user_id?.name || user_id?.email.split("@")[0]}&nbsp;
                    <span>({createdAt && moment(createdAt).fromNow()})</span>
                </h5>
                <p>{body}</p>
            </div>
        </div>
    );
}

function Comments({ comic_id }) {
    const { response, setComicId, setQueries } = useGetComments();

    const [comments, setComments] = useState([]);
    const [count, setCount] = useState(0);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        response.data && setComments((prev) => [...prev, ...response.data]);
        response.count && setCount(response.count || 0);
    }, [response]);

    // for external fetch Hook at initial page load
    useEffect(() => {
        setComicId(comic_id);
        return () => setComments([]);
    }, [comic_id, setComicId]);

    // loading more comments - we will load by a batch of five, skip set to current comments length
    const loadMoreComments = () => {
        setQueries({ limit: 5, skip: comments.length });
    };

    // Comment Input Stuff
    const [input, setInput] = useState("");
    const onComment = async (e) => {
        e.preventDefault();
        if (input) {
            try {
                const response = await axios.post(
                    `${environment.url}/api/v1/comics/${comic_id}/comments`,
                    { body: input }
                );
                if (response.status === 201) {
                    setComments([response.data, ...comments]);
                    setCount(count + 1);
                    setInput("");
                }
            } catch (err) {
                const msg = err.response.data.message;
                toast(msg);
                console.error(msg);
            }
        }
    };
    return (
        <section className="commentsWrapper">
            <h2 className="commentsHeading">Comments ({count})</h2>
            {auth.token ? (
                <form className="commentInput" onSubmit={onComment}>
                    <input
                        type="text"
                        placeholder="Write your comment..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </form>
            ) : (
                <div>Please login to comment</div>
            )}
            <div className="comments mt-4">
                {comments.map((comment) => (
                    <SingleComment key={comment._id} comment={comment} />
                ))}
                <div className="loadMoreComments mt-5">
                    <button onClick={loadMoreComments}>More Comments</button>
                </div>
            </div>
        </section>
    );
}

export default Comments;
