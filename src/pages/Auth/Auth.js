import "./Auth.scss";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoaderContext } from "../../contexts/loader.context";

import { signInWithGoogle } from "../../firebase";
function Auth({ setAuth }) {
    const { setLoading } = useContext(LoaderContext);

    const triggerGoogleSignIn = async () => {
        try {
            setLoading(true);
            const result = await signInWithGoogle();
            if (result.user && result.user.accessToken) {
                setAuth({
                    token: result.user.accessToken,
                    email: result.user.email,
                    name: result.user.displayName || "Anonymous",
                });
                localStorage.setItem(
                    "COMICONICS_TOKEN",
                    result.user.accessToken
                );
                localStorage.setItem("COMICONICS_EMAIL", result.user.email);
                localStorage.setItem(
                    "COMICONICS_USERNAME",
                    result.user.displayName || "Anonymous"
                );
                setLoading(false);
                toast("You are successfully logged in!");
            } else {
                throw new Error("Something went wrong during login");
            }
        } catch (e) {
            toast("Something went wrong during login");
            setLoading(false);
            console.log(e);
        }
    };

    return (
        <>
            <div className="authWrapper">
                <div className="signInButtons">
                    <h5>
                        Currently, we only accept authentication via Google, we
                        are trying for other methods of account creation. Sorry
                        for the inconvenience.
                    </h5>
                    <button
                        onClick={triggerGoogleSignIn}
                        className="login-with-google-btn"
                    >
                        Sign In With Google
                    </button>
                </div>
            </div>
        </>
    );
}

export default Auth;
