import React from "react";
import HeroParallax from "../components/HeroParallaxComponent";
import NewsParallax from "../components/NewsParallaxComponent";
import Gallery from "../components/GalleryComponent";
import ClassTabs from "../components/ClassTabsComponent";
import MapboxMap from "../components/MapboxMapComponent";

function HomePage() {
  return (
    <div>
      <HeroParallax />
      <ClassTabs />
      <NewsParallax />
      <Gallery />
      <MapboxMap />
    </div>
  );
}

export default HomePage;
