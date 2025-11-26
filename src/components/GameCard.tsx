import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/data/games";
interface GameCardProps {
  game: Game;
}
export const GameCard = ({
  game
}: GameCardProps) => {
  const instagramLink = "https://www.instagram.com/baratezashoop/?utm_source=ig_web_button_share_sheet";
  return <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
      <div className="aspect-[3/4] relative overflow-hidden bg-muted">
        <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        {game.discount && <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground font-bold">
            -{game.discount}%
          </Badge>}
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem]">
          {game.title}
        </h3>
        
        <div className="flex flex-wrap gap-1">
          {game.tags.slice(0, 2).map(tag => <span key={tag} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
              {tag}
            </span>)}
        </div>
        
        <div className="flex items-center justify-between pt-2 gap-[7px]">
          <div className="flex flex-col">
            {game.originalPrice && <span className="text-xs text-muted-foreground line-through">
                R$ {game.originalPrice.toFixed(2)}
              </span>}
            <span className="text-lg font-mono font-extrabold text-left text-primary">
              {game.price === 0 ? "GRÁTIS" : `R$ ${game.price.toFixed(2)}`}
            </span>
          </div>
          
          <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary" onClick={() => window.open(instagramLink, '_blank')} aria-label="Adicionar ao carrinho">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>;
};