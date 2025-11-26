import { Gamepad2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-float">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Mais de 150 jogos disponíveis</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Sua loja de jogos
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              com os melhores preços
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra ofertas incríveis em jogos AAA, indies e muito mais. 
            Descontos de até 50% em títulos selecionados!
          </p>
        </div>
      </div>
    </section>
  );
};
