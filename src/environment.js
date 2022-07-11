const environment = {
    url:
        process.env.REACT_APP_ENV === "local"
            ? "http://localhost:3000"
            : "https://comiconics-dev.herokuapp.com",
    // url: "https://comiconics-dev.herokuapp.com",
};

export default environment;
