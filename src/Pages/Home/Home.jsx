import BestSellingSection from "../../Components/BestSellingSection/BestSellingSection";
import CategorySection from "../../Components/CategorySection/CategorySection";
import CountdownSection from "../../Components/CountdownSection/CountdownSection";
import FlashSalesSection from "../../Components/FlashSalesSection/FlashSalesSection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NewArrivalSection from "../../Components/NewArrivalSection/NewArrivalSection";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import OurProductSection from './../../Components/OurProductSection/OurProductSection';


export default function Home() {




  return <>
    <ScrollToTop />
    <HeroSection />
    <FlashSalesSection />
    <CategorySection />
    <BestSellingSection />
    <CountdownSection />
    <OurProductSection />
    <NewArrivalSection />


  </>


}
