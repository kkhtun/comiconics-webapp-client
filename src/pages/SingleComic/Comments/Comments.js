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
import TinyLoader from "../../../components/Loader/TinyLoader";

function SingleComment({ comment }) {
    const { body, user_id, createdAt, currentlyPosted } = comment;
    return (
        <div
            className={`singleComment ${
                currentlyPosted ? "currentlyPosted" : ""
            }`}
        >
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
    const [isLoadingMoreCmts, setIsLoadingMoreCmts] = useState(false);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setIsLoadingMoreCmts(false);
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
        setIsLoadingMoreCmts(true);
        setQueries({ limit: 5, skip: comments.length });
    };

    // Comment Input Stuff
    const [input, setInput] = useState("");
    const [isPostingCmt, setIsPostingCmt] = useState(false);
    const onComment = async (e) => {
        e.preventDefault();
        if (input) {
            try {
                setIsPostingCmt(true);
                const response = await axios.post(
                    `${environment.url}/api/v1/comics/${comic_id}/comments`,
                    { body: input }
                );
                if (response.status === 201) {
                    setComments([
                        { ...response.data, currentlyPosted: true },
                        ...comments,
                    ]);
                    setCount(count + 1);
                    setInput("");
                }
                setIsPostingCmt(false);
            } catch (err) {
                setIsPostingCmt(false);
                const msg = err.response.data.message;
                toast(msg);
                console.error(msg);
            }
        } else {
            toast("Please write something to comment!");
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
                        disabled={isPostingCmt}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">
                        {isPostingCmt ? (
                            <TinyLoader styles={{ width: "36px" }} />
                        ) : (
                            <FontAwesomeIcon icon={faPaperPlane} />
                        )}
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
                    <button onClick={loadMoreComments}>
                        More Comments{" "}
                        {isLoadingMoreCmts ? (
                            <TinyLoader styles={{ width: "22px" }} />
                        ) : (
                            ""
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Comments;
