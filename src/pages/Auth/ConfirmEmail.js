// import { toast } from "react-toastify";
// import "./ConfirmEmail.scss";
// import { useContext, useState } from "react";
// import environment from "../../environment";
// import axios from "axios";
// import { LoaderContext } from "../../contexts/loader.context";

// function ConfirmEmail({ email, callConfirmEmail }) {
//     const [token, setToken] = useState("");
//     const { setLoading } = useContext(LoaderContext);

//     const confirmEmail = async () => {
//         if (!token) return toast("Please fill in the verification code");
//         callConfirmEmail(token);
//     };

//     const resendEmail = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const response = await axios.post(
//                 `${environment.url}/api/v1/users/send-verify-email`,
//                 {
//                     email,
//                 }
//             );
//             if (response.data?.messageId) {
//                 toast(
//                     `An Email with the confirmation code has been sent to ${email}`
//                 );
//                 setLoading(false);
//             }
//         } catch (e) {
//             toast(e.response?.data?.message || "Something went wrong");
//             console.log(e.response?.data?.message);
//             setLoading(false);
//         }
//     };
//     return (
//         <div className="authCard">
//             <h1>Confirm Email</h1>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="token">
//                         Please fill in the code we sent to{" "}
//                         {email || "your email"}
//                     </label>
//                     <input
//                         type="text"
//                         id="token"
//                         value={token}
//                         onChange={(e) => setToken(e.target.value)}
//                     />
//                 </div>
//                 <div className="buttonGroup">
//                     <button onClick={confirmEmail}>Proceed</button>
//                 </div>
//             </form>

//             <div className="resendCode">
//                 <button onClick={resendEmail}>Resend Code? (30s)</button>
//             </div>
//         </div>
//     );
// }

// export default ConfirmEmail;
