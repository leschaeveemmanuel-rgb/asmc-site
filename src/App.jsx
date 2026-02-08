import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('accueil');

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white font-sans">
      
      {/* 1. BARRE DE NAVIGATION */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em] uppercase z-10">
        <button 
          onClick={() => setPage('accueil')} 
          className={`transition-all duration-300 py-2 ${page === 'accueil' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          Accueil
        </button>
        <button 
          onClick={() => setPage('apropos')} 
          className={`transition-all duration-300 py-2 ${page === 'apropos' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          À Propos
        </button>
        <button 
          onClick={() => setPage('avions')} 
          className={`transition-all duration-300 py-2 ${page === 'avions' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          Mes Avions
        </button>
        <button 
          onClick={() => setPage('calendrier')} 
          className={`transition-all duration-300 py-2 ${page === 'calendrier' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          Calendrier
        </button>
        <button 
          onClick={() => setPage('contact')} 
          className={`transition-all duration-300 py-2 ${page === 'contact' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          Contact
        </button>
      </nav>

      {/* 2. ZONE DE CONTENU */}
      <main className="w-full max-w-6xl flex flex-col gap-8">
        
        {/* --- PAGE ACCUEIL --- */}
        {page === 'accueil' && (
          <div className="animate-in fade-in duration-700 flex flex-col gap-8 text-center">
            
            {/* SECTION BANNIÈRE (Epurée) */}
            <div className="w-full h-[200px] md:h-[400px] rounded-3xl overflow-hidden glass-card p-1 shadow-2xl">
              <img 
                src="/banner.png" 
                alt="Bannière ASMC" 
                className="w-full h-full object-cover rounded-2xl opacity-90"
              />
            </div>

            {/* TON TEXTE DE BIENVENUE */}
            <div className="glass-card p-8 md:p-16 space-y-10">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">
                  ASMC Bouglainval
                </h1>
                <div className="h-1 w-20 bg-blue-400/30 mx-auto rounded-full"></div>
              </div>

              <p className="text-xl md:text-2xl font-light leading-relaxed text-blue-100 max-w-4xl mx-auto">
                Soyez les bienvenus dans l'univers de l'Avia Sport Modèle Club de Bouglainval.
              </p>
              
              <div className="space-y-6 text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                <p>
                  Ici, nous allons vous présenter notre passion pour les modèles réduits d'avions, 
                  en toute simplicité et avec humilité.
                </p>
                <p>
                  Avec un peu de chance, cela pourrait vous donner l'envie de nous rejoindre 
                  et de vous lancer dans l'aventure passionnante du pilotage d'avions radiocommandés.
                </p>
              </div>

              <div className="pt-10">
                <p className="text-2xl font-serif italic text-blue-300">Bonne visite !</p>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE À PROPOS --- */}
        {page === 'apropos' && (
          <div className="glass-card p-8 md:p-20 text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest text-blue-400">Le Club</h2>
            <p className="text-lg opacity-80 leading-relaxed max-w-3xl mx-auto">
              L'Avia Sport Modèle Club rassemble des passionnés d'aéromodélisme depuis plus de 20 ans. 
              Notre terrain à Bouglainval offre un cadre idéal pour la pratique du vol radiocommandé.
            </p>
          </div>
        )}

        {/* --- PAGE MES AVIONS --- */}
        {page === 'avions' && (
          <div className="glass-card p-8 md:p-20 text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest text-blue-400">Le Hangar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card aspect-video flex items-center justify-center border-dashed border-white/20">
                <span className="opacity-30 italic">Galerie photos en cours de préparation...</span>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CALENDRIER --- */}
        {page === 'calendrier' && (
          <div className="glass-card p-8 md:p-20 text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest text-blue-400">Calendrier</h2>
            <p className="text-xl opacity-80">Retrouvez ici les dates de nos prochains vols et événements.</p>
          </div>
        )}

        {/* --- PAGE CONTACT --- */}
        {page === 'contact' && (
          <div className="glass-card p-8 md:p-20 text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest text-blue-400">Contact</h2>
            <p className="text-2xl font-bold">asmc.bouglainval@gmail.com</p>
          </div>
        )}

      </main>

      {/* 3. FOOTER */}
      <footer className="w-full text-center py-12 text-xs tracking-[0.4em] opacity-30 uppercase">
        © 2026 ASMC Bouglainval · Skybound Studio
      </footer>

    </div>
  );
}

export default App;