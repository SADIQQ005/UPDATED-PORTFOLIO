import React from "react";
import Companies from "./Companies";
import FeaturedProjects from "./FeaturedProjects";

const MainContent: React.FC = () => {
  return (
    <section>
      <FeaturedProjects />
      <Companies />
    </section>
  );
};

export default MainContent;
