
import { ServiceGrid} from "./ServiceGrid";
import { ServiceHero } from "./ServiceHero";
import { FloatingCTA } from "./FloatingCTA";
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";
import { MediaGallery } from "./MediaGallery";

const Service = () =>{


  return <>
  <Header/>
  <ServiceHero/>
  <ServiceGrid/>
  <MediaGallery/>
  <FloatingCTA/>
  <FAQ/>
  <Footer/>
  </>
}

export default Service;