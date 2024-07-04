import NavBar from "@/components/NavBar";
import Footer from "./Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-6 mb-4">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
