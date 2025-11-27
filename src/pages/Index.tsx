import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { GameCard } from "@/components/GameCard";
import { Footer } from "@/components/Footer";
import { games } from "@/data/games";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Mapeamento de categorias para tags dos jogos
  const categoryTagMap: Record<string, string[]> = {
    "Todos": [],
    "Ação": ["Action", "Shooter", "FPS"],
    "RPG": ["RPG", "JRPG", "Roguelike"],
    "FPS": ["FPS", "Tactical"],
    "Estratégia": ["Strategy", "Turn-Based", "RTS", "Grand Strategy"],
    "Corrida": ["Racing", "Simulation", "Rally"],
    "Horror": ["Horror", "Survival"],
    "Indie": ["Indie", "Platformer", "Metroidvania"],
    "Multiplayer": ["Multiplayer", "Co-op", "Battle Royale"],
    "Grátis": ["Free-to-Play"],
  };

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      // Filtro de busca
      const matchesSearch = searchQuery === "" || 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filtro de categoria
      let matchesCategory = true;
      if (activeCategory !== "Todos") {
        if (activeCategory === "Grátis") {
          matchesCategory = game.price === 0;
        } else {
          const categoryTags = categoryTagMap[activeCategory] || [];
          matchesCategory = game.tags.some(tag => 
            categoryTags.some(catTag => tag.includes(catTag))
          );
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />
      <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {activeCategory === "Todos" ? "Catálogo Completo" : activeCategory}
          </h2>
          <p className="text-muted-foreground">
            {filteredGames.length} {filteredGames.length === 1 ? "jogo encontrado" : "jogos encontrados"}
            {searchQuery && ` para "${searchQuery}"`}
          </p>
        </div>
        
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum jogo encontrado {searchQuery && `para "${searchQuery}"`}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Tente uma busca diferente ou selecione outra categoria
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
