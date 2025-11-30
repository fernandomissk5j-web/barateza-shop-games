import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Game } from "@/data/games";

interface WishlistContextType {
  items: Game[];
  addToWishlist: (game: Game) => void;
  removeFromWishlist: (gameId: number) => void;
  isInWishlist: (gameId: number) => boolean;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Game[]>(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  }, [items]);

  const addToWishlist = (game: Game) => {
    setItems((current) => {
      const exists = current.find((item) => item.id === game.id);
      if (exists) return current;
      return [...current, game];
    });
  };

  const removeFromWishlist = (gameId: number) => {
    setItems((current) => current.filter((item) => item.id !== gameId));
  };

  const isInWishlist = (gameId: number) => {
    return items.some((item) => item.id === gameId);
  };

  const totalItems = items.length;

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
};
