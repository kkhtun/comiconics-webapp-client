import {
    Routes,
    Route,
    Outlet,
    Navigate,
    BrowserRouter,
} from "react-router-dom";
import Wrapper from "./Wrapper";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Protected from "./pages/Protected/Protected";
import { useEffect, useContext } from "react";
import Genres from "./pages/Genres/Genres";
import SingleComic from "./pages/SingleComic/SingleComic";
import Read from "./pages/Read/Read";
import { AuthContext } from "./contexts/auth.context";
import app from "./firebase";
import { getAuth } from "firebase/auth";
function ProtectedRoute({ auth }) {
    if (!auth) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

function InverseProtectedRoute({ auth }) {
    if (auth) return <Navigate to="/" replace />;
    return <Outlet />;
}

function Router() {
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
        getAuth(app).onIdTokenChanged((user) => {
            const { displayName, email, accessToken } = user || {};
            if (accessToken) {
                setAuth({
                    token: accessToken,
                    email,
                    name: displayName || "Anonymous",
                });
                console.log("Previous token found on storage, set to context");
            } else {
                setAuth({});
            }
        });
    }, [setAuth]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/genres" element={<Genres />} />
                    <Route path="/comics/:comic_id" element={<SingleComic />} />
                    <Route path="/read/:chapter_id" element={<Read />} />

                    <Route
                        path=""
                        element={<InverseProtectedRoute auth={auth.token} />}
                    >
                        <Route path="/login" element={<Auth />} />
                    </Route>

                    <Route
                        path=""
                        element={<ProtectedRoute auth={auth.token} />}
                    >
                        <Route path="protected" element={<Protected />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
