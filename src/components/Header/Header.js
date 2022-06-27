import { NavDropdown } from "react-bootstrap";
import "./Header.scss";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
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
            name: "Login",
            route: "/login",
        },
    ];

    const [path, setPath] = useState("");
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
        setPath(pathname);
    }, [pathname]);

    const handleLogout = (e) => {
        // just a quick workaround for devflow, need to implement more elegant way
        localStorage.clear();
        setAuth({});
    };

    return (
        <>
            {path.includes("/read") ? (
                <></>
            ) : (
                <section className="header">
                    <div className="headerLeft">
                        <div
                            className="headerLogo"
                            onClick={() => navigate("/")}
                        >
                            {/* <img src={Logo} alt="logo" /> */}
                            <h1 className="logoText">Comiconics</h1>
                        </div>
                        <nav>
                            {links.map((l, idx) => (
                                <React.Fragment key={idx}>
                                    {l.route === "/login" && auth.token ? (
                                        <></>
                                    ) : (
                                        <NavLink
                                            to={l.route}
                                            key={idx}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "navLink navLinkActive"
                                                    : "navLink"
                                            }
                                        >
                                            {l.name}
                                        </NavLink>
                                    )}
                                </React.Fragment>
                            ))}
                        </nav>
                    </div>
                    <div className="headerRight">
                        {auth.token ? (
                            <NavDropdown
                                title={auth.name || "Anonymous"}
                                className="dropdown"
                            >
                                <NavDropdown.Item onClick={handleLogout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <></>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}

export default Header;
