import LoaderGif from "../../assets/loader.gif";
function TinyLoader({ styles = {} }) {
    return <img src={LoaderGif} alt="tiny-loader" style={styles} />;
}

export default TinyLoader;
