import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import { PropertyListData } from "../../data/PropertyListData";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import { FeaturedPropertiesData } from "../../data/FeaturedPropertiesData";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList listings={PropertyListData} />
        <h1 className="homeTitle">
          More than just hotels... Bookers discover pure comfort with homes,
          apartments, and more
        </h1>
        <FeaturedProperties listings={FeaturedPropertiesData} />
      </div>
    </div>
  );
};

export default Home;
