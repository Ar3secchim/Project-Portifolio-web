import Footer from "../Footer";
import NavBar from "../NavBar";

function DefaultLayout({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-6 w-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
