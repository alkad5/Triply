import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("triplyUser"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      alert("Login successful!");
      navigate("/home"); 
    } else {
      alert("Incorrect username or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Travel App Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">LOGIN</button>
        </form>

        <p className="auth-link">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;