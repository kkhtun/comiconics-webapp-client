import Login from "./Login";
import ConfirmEmail from "./ConfirmEmail";
import "./Auth.scss";
import { login } from "../../services/auth.service";
import { toast } from "react-toastify";
import axios from "axios";
import environment from "../../environment";
import { useContext, useState } from "react";
import { LoaderContext } from "../../contexts/loader.context";
function Auth({ setAuth }) {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("");
    const { setLoading } = useContext(LoaderContext);

    const callLogin = async (data) => {
        try {
            setLoading(true);
            const res = await login(data);
            if (res.token && res.email) {
                setAuth({ token: res.token, email: res.email });
                localStorage.setItem("COMICONICS_TOKEN", res.token);
                localStorage.setItem("COMICONICS_USER", res.email);
                setLoading(false);
            } else {
                throw new Error("Bad Data Received From Server");
            }
        } catch (e) {
            setLoading(false);
            toast(e.message);
        }
    };

    const callSignUp = async ({ email, password }) => {
        try {
            setLoading(true);
            // Call API to create a template user with given email and password
            const { data } = await axios.post(
                `${environment.url}/api/v1/users/create-template-user`,
                {
                    email,
                    password,
                    user_type: "READER",
                }
            );
            if (data) {
                // Call API to send verification code to email
                const response = await axios.post(
                    `${environment.url}/api/v1/users/send-verify-email`,
                    {
                        email,
                    }
                );
                // If server responds with messageId, the mail is sent (not sure to be delivered)
                if (response.data?.messageId) {
                    toast(
                        `An Email with the confirmation code has been sent to ${email}`
                    );
                    setStep(1);
                    setEmail(email);
                    setLoading(false);
                }
            } else {
                throw new Error("Something went wrong");
            }
        } catch (e) {
            toast(e.response?.data?.message || "Something went wrong");
            console.log(e.response?.data?.message);
            setLoading(false);
        }
    };

    const callConfirmEmail = async (token) => {
        try {
            setLoading(true);
            const response = await axios.post(
                `${environment.url}/api/v1/users/verify-email`,
                {
                    email,
                    token,
                }
            );
            if (response.data?.token && response.data?.email) {
                setAuth(response.data);
                localStorage.setItem("COMICONICS_TOKEN", response.data.token);
                localStorage.setItem("COMICONICS_USER", response.data.email);
                setLoading(false);
            } else {
                throw new Error("Something went wrong");
            }
        } catch (e) {
            toast(e.response?.data?.message || "Something went wrong");
            console.log(e.response?.data?.message);
            setLoading(false);
        }
    };
    return (
        <>
            <div className="authWrapper">
                {step === 0 ? (
                    <Login callLogin={callLogin} callSignUp={callSignUp} />
                ) : (
                    <></>
                )}
                {step === 1 ? (
                    <ConfirmEmail
                        email={email}
                        callConfirmEmail={callConfirmEmail}
                    />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Auth;
