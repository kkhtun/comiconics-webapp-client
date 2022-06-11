import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./Wrapper.scss";

function Wrapper() {
    const { pathname } = useLocation();

    useEffect(() => {
        let timeout = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            clearTimeout(timeout);
        }, 30);
        return () => (timeout ? clearTimeout(timeout) : null);
    }, [pathname]);

    return (
        <div className="appWrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Wrapper;
