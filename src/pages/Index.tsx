import React from "react";
import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import ContentSections from "@/components/ContentSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MusicPlayer />
      <ContentSections />
    </div>
  );
};

export default Index;
