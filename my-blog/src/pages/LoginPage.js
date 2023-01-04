import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Log in</h1>
      {error && <p className="error">{error}</p>}
      <input placeholder="Your Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Log in</button>
      <Link to="/create-account">Dont have an account? Create one here!</Link>
    </>
  );
};

export default LoginPage;
