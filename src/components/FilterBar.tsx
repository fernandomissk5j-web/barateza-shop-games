import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  "Todos",
  "Ação",
  "RPG",
  "FPS",
  "Estratégia",
  "Corrida",
  "Horror",
  "Indie",
  "Multiplayer",
  "Grátis",
];

export const FilterBar = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow-primary whitespace-nowrap"
                  : "whitespace-nowrap"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
