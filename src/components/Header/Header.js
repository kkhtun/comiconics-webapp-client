import { NavDropdown } from "react-bootstrap";
import "./Header.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const links = [
        {
            name: "Home",
            route: "/",
        },
        {
            name: "Genres",
            route: "/genres",
        },
        {
            name: "About",
            route: "/about",
        },
        {
            name: "Login",
            route: "/login",
        },
    ];

    const [path, setPath] = useState("");
    const { pathname } = useLocation();

    useEffect(() => {
        setPath(pathname);
    }, [pathname]);

    return (
        <>
            {path.includes("/read") ? (
                <></>
            ) : (
                <section className="header">
                    <div className="headerLeft">
                        <div className="headerLogo">
                            {/* <img src={Logo} alt="logo" /> */}
                            <h1 className="logoText">Comiconics</h1>
                        </div>
                        <nav>
                            {links.map((l, idx) => (
                                <span className="navLink" key={idx}>
                                    {l.name}
                                </span>
                            ))}
                        </nav>
                    </div>
                    <div className="headerRight">
                        <NavDropdown
                            title="admin@gmail.com"
                            className="dropdown"
                        >
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </section>
            )}
        </>
    );
}

export default Header;
