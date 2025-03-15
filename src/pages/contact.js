import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const quotes = [
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. – William James",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
];

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const today = new Date().getDay(); // Get the current day (0-6)
    setQuote(quotes[today % quotes.length]); // Rotate quotes daily
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };
  

  return (
    <div className="relative flex items-center justify-between min-h-screen mx-10 -my-10 text-foreground px-12">
      <div className="max-w-3xl w-full space-y-6">
        {/* Contact Title */}
        <h2 className="text-5xl font-bold text-left">Let&apos;s Connect</h2>
        <p className="text-xl text-left text-foreground/70">
          Have a project in mind or just want to say hi? Fill out the form
          below, and I&apos;ll get back to you!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-lg font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-lg font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-lg font-medium text-foreground">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 w-full p-3 border border-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg font-semibold text-lg shadow-md hover:bg-primary/80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center w-full max-w-3xl">
          <p className="text-2xl italic">&quot;{quote}&quot;</p>
        </div>

        <div className="flex justify-center space-x-6 text-4xl font-medium mt-10">
          <a
            href="https://github.com/mozafarani"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mozafarani"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-primary transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
