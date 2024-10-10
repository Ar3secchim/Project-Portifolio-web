import Footer from './Footer';

import NavBar from '@/components/NavBar';

export default function DefaultLayout({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-6 mb-4">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
