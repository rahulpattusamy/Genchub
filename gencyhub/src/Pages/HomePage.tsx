import HeroSection from "../components/HeroSection";
import CtaSection from "../components/CtaSection";
import CategoryCard from "../components/CategoryCard";
const HomePage = () => {
  return (
    <div className="flex flex-col mt-10 w-full">
      <div className="md:-ml-0">
        <HeroSection />
      </div>
      <div id="category">
      <CategoryCard/>
      </div>

      <CtaSection />
    </div>
  );
};

export default HomePage;
