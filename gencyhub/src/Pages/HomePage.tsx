import HeroSection from "../components/HeroSection";
import CategoryCard from "../components/category/CategoryCard";
import CtaSection from "../components/CtaSection";


const HomePage = () => {
  
  return (
    <div className="flex flex-col mt-10 w-full">
      <div className="md:-ml-0">
        <HeroSection />
      </div>
      <div id="category">

        <CategoryCard />
      </div>

      <CtaSection />
    </div>
  );
};

export default HomePage;
