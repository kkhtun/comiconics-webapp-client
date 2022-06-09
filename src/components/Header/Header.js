import { NavDropdown } from "react-bootstrap";
import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
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
            name: "Login",
            route: "/login",
        },
    ];

    const [path, setPath] = useState("");
    const { pathname } = useLocation();

    useEffect(() => {
        setPath(pathname);
    }, [pathname]);

    const handleLogout = (e) => {
        // just a quick workaround for devflow, need to implement more elegant way
        localStorage.clear();
        window.location.reload();
    };

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
                            ))}
                        </nav>
                    </div>
                    <div className="headerRight">
                        <NavDropdown
                            title="admin@gmail.com"
                            className="dropdown"
                        >
                            <NavDropdown.Item onClick={handleLogout}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </section>
            )}
        </>
    );
}

export default Header;
