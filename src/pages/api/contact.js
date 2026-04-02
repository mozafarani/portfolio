export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sheetDbUrl = process.env.SHEETDB_API_URL?.trim();
  if (!sheetDbUrl) {
    console.error("SHEETDB_API_URL is not set");
    return res.status(503).json({ error: "Contact form is not configured." });
  }

  const bearer = process.env.SHEETDB_BEARER_TOKEN?.trim();
  const headers = { "Content-Type": "application/json" };
  if (bearer) {
    headers.Authorization = `Bearer ${bearer}`;
  }

  const timestamp = new Date().toISOString();

  try {
    const sheetRes = await fetch(sheetDbUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: { name, email, message, timestamp },
      }),
    });

    if (sheetRes.ok) {
      return res.status(200).json({ message: "Message sent successfully!" });
    }

    let msg = "Failed to send message.";
    try {
      const body = await sheetRes.json();
      if (typeof body?.error === "string") msg = body.error;
    } catch {
      /* ignore */
    }
    return res.status(502).json({ error: msg });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send message." });
  }
}
