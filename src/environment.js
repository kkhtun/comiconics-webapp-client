const environment = {
    url:
        process.env.REACT_APP_ENV === "local"
            ? "http://localhost:3000"
            : "https://comiconics-server.onrender.com",
    // url: "https://comiconics-dev.herokuapp.com",
};

export default environment;
