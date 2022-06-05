import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./Wrapper.scss";

function Wrapper() {
    return (
        <div className="appWrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Wrapper;
