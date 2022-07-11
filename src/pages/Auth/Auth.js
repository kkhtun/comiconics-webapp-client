import "./Auth.scss";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoaderContext } from "../../contexts/loader.context";
import app from "../../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Auth() {
    const { setLoading } = useContext(LoaderContext);

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => signInWithPopup(getAuth(app), provider);

    const triggerGoogleSignIn = async () => {
        try {
            setLoading(true);
            const result = await signInWithGoogle();
            if (result) {
                toast("You are successfully logged in!");
            } else {
                throw new Error("Something went wrong during login");
            }
            setLoading(false);
        } catch (e) {
            // trigger if user close the popup
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
