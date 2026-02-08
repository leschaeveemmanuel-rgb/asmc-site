import React, { useState } from 'react';

function App() {
  // C'est ici qu'on gère quelle page est affichée
  const [page, setPage] = useState('accueil');

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white">
      
      {/* NAVIGATION */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em] uppercase cursor-pointer">
        <span onClick={() => setPage('accueil')} className={page === 'accueil' ? 'text-blue-400' : 'hover:text-blue-300'}>Accueil</span>
        <span onClick={() => setPage('apropos')} className={page === 'apropos' ? 'text-blue-400' : 'hover:text-blue-300'}>À Propos</span>
        <span onClick={() => setPage('avions')} className={page === 'avions' ? 'text-blue-400' : 'hover:text-blue-300'}>Mes Avions</span>
        <span onClick={() => setPage('calendrier')} className={page === 'calendrier' ? 'text-blue-400' : 'hover:text-blue-300'}>Calendrier</span>
      </nav>

      {/* CONTENU DYNAMIQUE */}
      <main className="glass-card w-full max-w-6xl min-h-[60vh] p-8 md:p-20 flex items-center justify-center text-center">
        
        {page === 'accueil' && (
          <div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">BIENVENUE À L'ASMC</h1>
            <p className="text-xl md:text-2xl opacity-80">Découvrez notre passion pour l'aéromodélisme à Bouglainval.</p>
          </div>
        )}

        {page === 'apropos' && (
          <div>
            <h1 className="text-4xl font-bold mb-6">À PROPOS DU CLUB</h1>
            <p className="text-lg opacity-80">Notre club existe depuis plus de 20 ans...</p>
          </div>
        )}

        {page === 'avions' && (
          <div>
            <h1 className="text-4xl font-bold mb-6">MES AVIONS</h1>
            <p className="text-lg opacity-80">La galerie de nos modèles réduits arrive bientôt !</p>
          </div>
        )}

        {page === 'calendrier' && (
          <div>
            <h1 className="text-4xl font-bold mb-6">CALENDRIER</h1>
            <p className="text-lg opacity-80">Prochaines rencontres et sessions de vol.</p>
          </div>
        )}

      </main>

      <footer className="opacity-40 text-xs tracking-widest">
        © 2026 ASMC BOUGLAINVAL · SKYBOUND STUDIO
      </footer>
    </div>
  );
}

export default App;