import React, { useState } from 'react';

function App() {
  // Le "cerveau" qui gère la navigation
  const [page, setPage] = useState('accueil');

  return (
    // C'est cette DIV "flex" que tu vois dans ton inspecteur
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white font-sans">
      
      {/* LA NAVIGATION - Elle doit apparaître juste ici dans Elements */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
        <button 
          onClick={() => setPage('accueil')} 
          className={`transition-colors duration-300 py-2 px-4 ${page === 'accueil' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          Accueil
        </button>
        <button 
          onClick={() => setPage('apropos')} 
          className={`transition-colors duration-300 py-2 px-4 ${page === 'apropos' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          À Propos
        </button>
        <button 
          onClick={() => setPage('avions')} 
          className={`transition-colors duration-300 py-2 px-4 ${page === 'avions' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          Mes Avions
        </button>
        <button 
          onClick={() => setPage('calendrier')} 
          className={`transition-colors duration-300 py-2 px-4 ${page === 'calendrier' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          Calendrier
        </button>
      </nav>

      {/* ZONE DE CONTENU */}
      <main className="glass-card w-full max-w-6xl min-h-[60vh] flex items-center justify-center p-8 md:p-20 text-center">
        
        {page === 'accueil' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase">Bienvenue à l'ASMC</h1>
            <p className="text-xl md:text-2xl opacity-80">Le club d'aéromodélisme de Bouglainval.</p>
          </div>
        )}

        {page === 'apropos' && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Notre Passion</h2>
            <p className="max-w-2xl text-lg opacity-80">Nous volons tous les weekends sur notre terrain dédié...</p>
          </div>
        )}

        {page === 'avions' && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Le Hangar</h2>
            <p className="text-lg opacity-80 italic">Les photos de nos modèles arrivent très bientôt.</p>
          </div>
        )}

        {page === 'calendrier' && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Agenda</h2>
            <p className="text-lg opacity-80">Prochain vol : Dimanche prochain à 14h.</p>
          </div>
        )}

      </main>

      <footer className="opacity-40 text-xs tracking-widest uppercase py-10">
        © 2026 ASMC Bouglainval · Skybound Studio
      </footer>
    </div>
  );
}

export default App;