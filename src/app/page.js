"use client";

import BetterRateSection from "@/components/BetterRateSection";
import BoxContent from "@/components/BoxContent";
import CustomSection from "@/components/CustomSection";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import PostalCodeSection from "@/components/PostalCodeSection";
import ProductBlock from "@/components/ProductBlock";
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
      <Shop />
    </>
  );
}
