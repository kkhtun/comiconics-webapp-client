import "./Loader.scss";
import LoaderGif from "../../assets/loader.gif";

function Loader({ isLoading = false }) {
    return (
        <>
            {isLoading ? (
                <div className="loader">
                    <img src={LoaderGif} alt="loader" />
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default Loader;
