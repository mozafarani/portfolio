import { Inter, Poppins } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css"; // Ensure Tailwind styles are imported

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${inter.variable} ${poppins.variable} relative min-h-screen overflow-x-clip bg-background font-sans text-foreground`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        {/* Full-height side washes — primary blue both edges (symmetric to previous right-side treatment) */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.085)_0%,rgba(59,130,246,0.02)_12%,transparent_32%,transparent_68%,rgba(59,130,246,0.02)_88%,rgba(59,130,246,0.085)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(59,130,246,0.11)_0%,rgba(59,130,246,0.025)_18%,transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(-155deg,rgba(59,130,246,0.11)_0%,rgba(59,130,246,0.025)_18%,transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_42%_at_50%_-8%,rgba(59,130,246,0.12),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_120%,transparent_55%,rgba(13,17,23,0.45)_100%)]" />
      </div>
      <Navbar />
      <div className="relative z-[1]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
