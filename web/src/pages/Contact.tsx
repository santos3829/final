import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Contacts = () => {
  return (
    <main className="relative">
      <Header />
      <FloatingCTA/>
      <Contact />
      <Footer />
    </main>
  );
};

export default Contacts;