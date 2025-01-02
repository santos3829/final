import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Services />
      <Reviews />
     <FloatingCTA/>
      <Footer />
    </main>
  );
};

export default Home;