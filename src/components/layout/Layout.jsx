import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F9F6F0] font-body text-[#2C2A29] selection:bg-[#B59A6D] selection:text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}