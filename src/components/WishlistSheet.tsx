import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export const WishlistSheet = () => {
  const { items, removeFromWishlist, totalItems } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (game: any) => {
    addToCart(game);
    toast({
      title: "Adicionado ao carrinho!",
      description: game.title,
    });
  };

  const handleRemove = (gameId: number) => {
    removeFromWishlist(gameId);
    toast({
      title: "Removido dos favoritos",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
          aria-label="Favoritos"
        >
          <Heart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Meus Favoritos ({totalItems})
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Sua lista de favoritos está vazia
              </p>
            </div>
          ) : (
            items.map((game) => (
              <div
                key={game.id}
                className="flex gap-4 p-4 bg-card border border-border rounded-lg"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-24 h-auto object-cover rounded"
                />
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold text-sm line-clamp-2">
                    {game.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    {game.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        R$ {game.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-lg font-bold text-primary">
                      {game.price === 0 ? "GRÁTIS" : `R$ ${game.price.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => handleAddToCart(game)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Adicionar
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemove(game.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
