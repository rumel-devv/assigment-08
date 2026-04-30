import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar/>
      <main>
        {children}
        </main>
      <Footer/>
    </>
  );
}
