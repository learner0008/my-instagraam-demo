import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      setMsg("Please enter username and password.");
      return;
    }

    // fake post for demo
    setMsg("credentials invalid!");
    setUsername("");
    setPassword("");
  }

  return (
    <div className="page-wrapper">
      <div className="login-box">
        <div className="logo-placeholder">Demo</div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username or email"
            autoComplete="off"
          />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"
          />
          <button type="submit">Log In</button>
        </form>

        {msg && <div className="message">{msg}</div>}

        <a href="#" className="forgot-link">
          Forgot password?
        </a>

        <div className="divider" />

        <button className="create-btn">Create new account</button>

        <div className="meta-footer">© 2025 Demo App</div>
      </div>
    </div>
  );
        }
