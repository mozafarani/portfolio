import { useEffect } from "react";
import Head from "next/head";

export default function ContactPage() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);

  return (
    <>
      <Head>
        <title>Contact | Mohammed Alzafarani</title>
        <meta
          name="description"
          content="Get in touch about QA, test automation, or collaboration."
        />
      </Head>
      <main className="flex min-h-[50vh] items-center justify-center bg-background px-4 text-center text-sm text-mutedText">
        <p>Redirecting…</p>
      </main>
    </>
  );
}
