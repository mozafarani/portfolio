import { useEffect } from "react";
import Head from "next/head";

export default function ProjectsPage() {
  useEffect(() => {
    window.location.replace("/#projects");
  }, []);

  return (
    <>
      <Head>
        <title>Selected Work | Mohammed Alzafarani</title>
        <meta
          name="description"
          content="Side projects and academic work—web, APIs, and test-driven quality."
        />
      </Head>
      <main className="flex min-h-[50vh] items-center justify-center bg-background px-4 text-center text-sm text-mutedText">
        <p>Redirecting…</p>
      </main>
    </>
  );
}
