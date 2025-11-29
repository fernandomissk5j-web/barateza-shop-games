import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export const FilterBar = ({ 
  activeCategory, 
  onCategoryChange,
  priceRange,
  onPriceRangeChange 
}: FilterBarProps) => {
  return (
    <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          {/* Filtro de preço */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap">
                <SlidersHorizontal className="h-4 w-4" />
                Preço
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Faixa de Preço</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>R$ {priceRange[0].toFixed(2)}</span>
                    <span>-</span>
                    <span>R$ {priceRange[1].toFixed(2)}</span>
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={(value) => onPriceRangeChange(value as [number, number])}
                    min={0}
                    max={300}
                    step={10}
                    className="mb-2"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onPriceRangeChange([0, 300])}
                  className="w-full"
                >
                  Limpar Filtro
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Categorias */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => onCategoryChange(category)}
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
    </div>
  );
};
