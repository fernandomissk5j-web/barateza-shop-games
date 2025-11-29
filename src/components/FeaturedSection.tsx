import { GameCard } from "./GameCard";
import { games } from "@/data/games";
import { Flame } from "lucide-react";

export const FeaturedSection = () => {
  // Ofertas relâmpago: jogos com maior desconto (55-60%)
  const flashDeals = games
    .filter(game => game.discount && game.discount >= 55)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(0, 5);

  // Destaques: jogos populares com bom desconto (45-54%)
  const highlights = games
    .filter(game => game.discount && game.discount >= 45 && game.discount < 55)
    .slice(0, 5);

  return (
    <div className="space-y-16">
      {/* Ofertas Relâmpago */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
            <Flame className="h-5 w-5 text-destructive animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-destructive">
              Ofertas Relâmpago
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-destructive/50 to-transparent" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {flashDeals.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Destaques */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Destaques
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {highlights.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};
