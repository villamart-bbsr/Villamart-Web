import React from "react";

import MainLayout from "../../components/MainLayout";
import Articles from "./container/Articles";
import CTA from "./container/CTA";
import Hero from "./container/Hero";
import SEO from "../../components/SEO";

const HomePage = () => {
  return (
    <MainLayout>
      <SEO title="Blog | Villamart" description="Welcome to my blog where I share insights and articles on various topics." />
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
