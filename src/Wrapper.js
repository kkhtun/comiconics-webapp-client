import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import { LoaderContext } from "./contexts/loader.context";
import "./Wrapper.scss";

function Wrapper() {
    const { pathname } = useLocation();
    const { loading } = useContext(LoaderContext);

    useEffect(() => {
        let timeout = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            clearTimeout(timeout);
        }, 10);
        return () => (timeout ? clearTimeout(timeout) : null);
    }, [pathname]);

    return (
        <div className="appWrapper">
            <Loader isLoading={loading} />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Wrapper;
