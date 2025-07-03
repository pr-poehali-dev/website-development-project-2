import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-primary rotate-45 punk-border"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-accent rotate-12 punk-border"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 border-4 border-primary rotate-45 punk-border"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-punk text-primary mb-4 punk-shadow">
          ЧЕХЛИСТЫ
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-accent font-punk mb-2">
          🤘 ПАНК РОК ГРУППА 🤘
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Мы играем музыку, которая разрушает стереотипы и пробуждает дух
          свободы. Присоединяйся к нашему движению!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 punk-shadow font-punk text-lg px-8 py-6"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Слушать Музыку
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="punk-border font-punk text-lg px-8 py-6"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать Треки
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 hover:bg-primary/20 punk-shadow"
          >
            <Icon name="Send" size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 hover:bg-primary/20 punk-shadow"
          >
            <Icon name="Youtube" size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 hover:bg-primary/20 punk-shadow"
          >
            <Icon name="Music" size={24} />
          </Button>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
