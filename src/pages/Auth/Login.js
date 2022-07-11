// import { useState } from "react";
// import { toast } from "react-toastify";
// import "./Login.scss";

// function Login({ callLogin, callSignUp }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!email || !password) {
//             toast("Invalid Email or Password");
//             return;
//         }
//         callLogin({ email, password });
//     };

//     const signUp = () => {
//         if (!email || !password) {
//             toast("Invalid Email or Password");
//             return;
//         }
//         callSignUp({ email, password });
//     };
//     return (
//         <div className="authCard">
//             <h1>Join Us</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email *</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password *</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <div className="buttonGroup">
//                     <button type="submit">Login</button>
//                     <button type="button" onClick={signUp}>
//                         Sign Up
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;
