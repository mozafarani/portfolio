import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "../layout/SectionHeader";
import { Button } from "../ui/Button";
import Field from "../ui/Field";
import IconLink from "../ui/IconLink";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const PUBLIC_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "your.name@email.com";

const quotes = [
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. – William James",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const today = new Date().getDay();
    setQuote(quotes[today % quotes.length]);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const timestamp = new Date().toISOString();

    try {
      const res = await fetch(
        "https://sheetdb.io/api/v1/2ntjrmbt4t7ex",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: {
              name: formData.name,
              email: formData.email,
              message: formData.message,
              timestamp,
            },
          }),
        }
      );

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        let msg = "Failed to send message.";
        try {
          const body = await res.json();
          if (typeof body?.error === "string") msg = body.error;
        } catch {
          /* ignore */
        }
        alert(msg);
      }
    } catch {
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <SectionHeader
        eyebrow="Contact"
        title="Let's connect"
        description={
          <>
            Use the form below.
          </>
        }
      />

      <div className="mt-1 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8 xl:gap-10">
        <div className="w-full max-w-2xl flex-1">
          <div className="rounded-ui border border-borderSubtle bg-surface/40 p-5 shadow-card sm:p-6 md:p-7">
            <p className="text-xs font-medium uppercase tracking-widest text-mutedText">
              Send a message
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-4 sm:mt-5 sm:space-y-5"
            >
              <Field label="Name">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Email">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Message">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </Field>
              <Button type="submit" variant="outlineNeutral" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 lg:h-full lg:max-w-md lg:flex-1">
          <div className="flex-1 rounded-ui border border-borderSubtle/80 bg-foreground/[0.03] px-5 py-6 sm:px-6 sm:py-7">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-mutedText">
              Note
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-foreground/75 sm:text-[0.95rem]">
              <span className="font-serif italic text-foreground/85">
                &ldquo;{quote}&rdquo;
              </span>
            </p>
          </div>
          <div className="flex-1 rounded-ui border border-borderSubtle bg-surface/40 px-4 py-5 sm:px-6">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-mutedText">
              Elsewhere
            </p>
            <div className="mt-4 flex justify-center gap-6 sm:gap-8 md:gap-10">
              <IconLink href="https://github.com/mozafarani" label="GitHub">
                <FaGithub />
              </IconLink>
              <IconLink
                href="https://linkedin.com/in/mozafarani"
                label="LinkedIn"
              >
                <FaLinkedin />
              </IconLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
