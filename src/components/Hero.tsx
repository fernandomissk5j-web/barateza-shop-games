import { Gamepad2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-float">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-primary">150+ JOGOS • DESCONTOS ATÉ 90%</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            OS MELHORES
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              PREÇOS EM JOGOS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Jogos AAA, indies e muito mais com descontos imperdíveis. 
            <span className="block mt-2 text-primary font-bold">Aproveite enquanto dura!</span>
          </p>
        </div>
      </div>
    </section>
  );
};
