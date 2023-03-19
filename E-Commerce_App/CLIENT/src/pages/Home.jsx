import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
