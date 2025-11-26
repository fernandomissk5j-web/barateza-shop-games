import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { GameCard } from "@/components/GameCard";
import { Footer } from "@/components/Footer";
import { games } from "@/data/games";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FilterBar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Catálogo Completo</h2>
          <p className="text-muted-foreground">
            {games.length} jogos disponíveis com ofertas incríveis
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
