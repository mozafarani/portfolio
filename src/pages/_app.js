import Navbar from "../components/Navbar";
import "../styles/globals.css"; // Ensure Tailwind styles are imported

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
