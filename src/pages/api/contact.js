import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sheetDbUrl = process.env.SHEETDB_API_URL;
  if (sheetDbUrl) {
    const timestamp = new Date().toISOString();
    const headers = { "Content-Type": "application/json" };
    const bearer = process.env.SHEETDB_BEARER_TOKEN;
    if (bearer) headers.Authorization = `Bearer ${bearer}`;
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

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "mohammefm@gmail.com", // Your email where you receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
