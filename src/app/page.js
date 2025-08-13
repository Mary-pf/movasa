"use client";

import BetterRateSection from "@/components/BetterRateSection";
import BoxContent from "@/components/BoxContent";
import Carousel from "@/components/Carousel";
import CarouselBox from "@/components/CarouselBox";
import CustomSection from "@/components/CustomSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBox from "@/components/MainBox";
import MainContent from "@/components/MainContent";
import PostalCodeSection from "@/components/PostalCodeSection";
import ProductBlock from "@/components/ProductBlock";
import ShadowBoxCarousel from "@/components/ShadowBoxCarousel";
import Shop from "@/components/Shop";


export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <CustomSection />
      <PostalCodeSection />
      <FAQ />
      <BetterRateSection />
      <ProductBlock />
      <BoxContent />
      {/* <Shop /> */}
      <CarouselBox />
      <ShadowBoxCarousel />
      {/* <Carousel /> */}
      <MainBox />
      <Footer />
    </>
  );
}
