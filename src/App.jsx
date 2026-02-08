import React from 'react';

function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8">
      
      {/* 1. BARRE DE NAVIGATION (Flottante et vitrée) */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
        <a href="#" className="hover:text-blue-400 transition-colors">Accueil</a>
        <a href="#" className="hover:text-blue-400 transition-colors">À Propos</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Mes Avions</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Calendrier</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
      </nav>

      {/* 2. BANNIÈRE (HERO SECTION) */}
      <div className="glass-card w-full max-w-6xl h-[300px] relative overflow-hidden">
        {/* On utilise ton image spécifique */}
        <img 
          src="/A_high-resolution_digital_photograph_captures_two_.png" 
          alt="Bandeau ASMC Bouglainval" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Un léger voile pour que le verre ressorte mieux */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 3. SECTION DE BIENVENUE (Centrage absolu et grande police) */}
      <main className="glass-card w-full max-w-6xl flex-grow flex items-center justify-center p-8 md:p-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-12 leading-[1.1] tracking-tight">
            Soyez les bienvenus dans l'univers de l'Avia Sport Modèle Club de Bouglainval.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 font-light leading-relaxed opacity-90">
            Ici, nous allons vous présenter notre passion pour les modèles réduits d'avions,
            en toute simplicité et avec humilité.
          </p>
          <div className="mt-12 h-1 w-24 bg-blue-400/50 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg md:text-xl italic font-serif opacity-70">
            Bonne visite !
          </p>
        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="w-full text-center py-8 text-sm tracking-widest opacity-40 font-light">
        © 2025 ASMC BOUGLAINVAL · SITE DÉVELOPPÉ PAR SKYBOUND STUDIO
      </footer>

    </div>
  );
}

export default App;