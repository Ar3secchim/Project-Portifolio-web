import Footer from "../Footer";
import NavBar from "../NavBar";

export default function DefaultLayout({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <NavBar />
      
      {children}
      <Footer />
    </div>
  );
}