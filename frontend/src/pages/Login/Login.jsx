import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isSignup
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const body = isSignup
        ? { name, email, password }
        : { email, password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      // ✅ Signup success → go to login
      if (isSignup) {
        alert("Account created! Please login.");
        setIsSignup(false);
        setPassword("");
        return;
      }

      // ✅ Login success
      localStorage.setItem("token", data.token);
      login(data.user);
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <div className="heading">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <div className="underline"></div>
        </div>

        {isSignup && (
          <input  
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {isSignup ? "Create Account" : "Login"}
        </button>

        <p onClick={() => setIsSignup(!isSignup)}>
          {isSignup
            ? "Already have an account? Login"
            : "New user? Create account"}
        </p>
      </form>
    </div>
  );
};

export default Login;
