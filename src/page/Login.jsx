import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../page/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useContext(UserContext);
  const [error, setError] = useState(null);


const onGoogleLogin = () => {
  setLoading(true);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user); // Check the user object here
      handleLogin({
        uid: user.uid,
        email: user.email,
        name: user.displayName // Assuming the user object has a displayName field for the name
      });
      setLoading(false);
      navigate("/");
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
};
  

  const handleEmailLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear any previous errors
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleLogin(user);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  

  return (
    <main className="container">
      <section className="card">
        <div>
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <form className="form">
            <div className="form-group">
              <label className="label" htmlFor="email-address">
                Email address
              </label>
              <input
                className="input"
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="input"
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button className="button" onClick={handleEmailLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
              <button className="button google-button" onClick={onGoogleLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login with Google"}
              </button>
            </div>
          </form>

          <p className="text-sm text-white text-center">
            No account yet? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
