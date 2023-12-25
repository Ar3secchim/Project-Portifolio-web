import Footer from "../Footer";
import NavBar from "../NavBar";
import Favicon from "../../../public/favicon.ico";

export default function DefaultLayout({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}