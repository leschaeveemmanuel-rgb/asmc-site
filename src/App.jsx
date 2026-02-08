import React, { useState } from 'react';

function App() {
  // Le "cerveau" qui mémorise la page active
  const [page, setPage] = useState('accueil');

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white font-sans">
      
      {/* 1. BARRE DE NAVIGATION */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
        <button 
          onClick={() => setPage('accueil')} 
          className={`transition-colors duration-300 ${page === 'accueil' ? 'text-blue-400 border-b border-blue-400' : 'hover:text-blue-300'}`}
        >
          Accueil
        </button>
        <button 
          onClick={() => setPage('apropos')} 
          className={`transition-colors duration-300 ${page === 'apropos' ? 'text-blue-400 border-b border-blue-400' : 'hover:text-blue-300'}`}
        >
          À Propos
        </button>
        <button 
          onClick={() => setPage('avions')} 
          className={`transition-colors duration-300 ${page === 'avions' ? 'text-blue-400 border-b border-blue-400' : 'hover:text-blue-300'}`}
        >
          Mes Avions
        </button>
        <button 
          onClick={() => setPage('calendrier')} 
          className={`transition-colors duration-300 ${page === 'calendrier' ? 'text-blue-400 border-b border-blue-400' : 'hover:text-blue-300'}`}
        >
          Calendrier
        </button>
        <button 
          onClick={() => setPage('contact')} 
          className={`transition-colors duration-300 ${page === 'contact' ? 'text-blue-400 border-b border-blue-400' : 'hover:text-blue-300'}`}
        >
          Contact
        </button>
      </nav>

      {/* 2. ZONE DE CONTENU DYNAMIQUE */}
      <main className="glass-card w-full max-w-6xl min-h-[70vh] flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
        
        {/* --- PAGE ACCUEIL --- */}
        {page === 'accueil' && (
          <div className="max-w-4xl text-center animate-in fade-in duration-700">
            <h1 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter uppercase">
              Bienvenue à l'ASMC Bouglainval
            </h1>
            <p className="text-xl md:text-3xl text-blue-100 font-light leading-relaxed">
              Ici, nous partageons notre passion pour l'aéromodélisme en toute simplicité.
              Laissez-vous porter par l'aventure du vol radiocommandé.
            </p>
            <div className="mt-12 h-1 w-24 bg-blue-400/50 mx-auto rounded-full"></div>
            <p className="mt-8 text-lg italic opacity-60">Bonne visite !</p>
          </div>
        )}

        {/* --- PAGE À PROPOS --- */}
        {page === 'apropos' && (
          <div className="w-full text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase">Notre Club</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-blue-300">L'Histoire</h3>
                <p className="opacity-80 leading-relaxed">
                  L'Avia Sport Modèle Club de Bouglainval rassemble des passionnés depuis plus de 20 ans. 
                  Notre but est de promouvoir la construction et le pilotage de modèles réduits dans une ambiance conviviale.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Le Terrain</h3>
                <p className="opacity-80 leading-relaxed">
                  Situé dans un cadre dégagé à Bouglainval, notre terrain dispose d'une piste entretenue 
                  permettant de faire décoller tous types d'appareils, du planeur au moteur thermique.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE MES AVIONS --- */}
        {page === 'avions' && (
          <div className="w-full text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase">Le Hangar</h2>
            <p className="text-xl opacity-60 mb-12">Découvrez les machines de nos membres.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Exemple d'emplacement pour un avion */}
              <div className="glass-card p-4 aspect-square flex items-center justify-center border-dashed border-white/20">
                <span className="opacity-30">Photo Avion 1</span>
              </div>
              <div className="glass-card p-4 aspect-square flex items-center justify-center border-dashed border-white/20">
                <span className="opacity-30">Photo Avion 2</span>
              </div>
              <div className="glass-card p-4 aspect-square flex items-center justify-center border-dashed border-white/20">
                <span className="opacity-30">Photo Avion 3</span>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CALENDRIER --- */}
        {page === 'calendrier' && (
          <div className="w-full text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase">Prochains Rendez-vous</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex justify-between p-4 bg-white/5 rounded-xl border-l-4 border-blue-400">
                <span className="font-bold">Session de Vol Libre</span>
                <span className="opacity-60">Dimanche prochain - 14h00</span>
              </div>
              <div className="flex justify-between p-4 bg-white/5 rounded-xl border-l-4 border-blue-400">
                <span className="font-bold">Cours d'écolage</span>
                <span className="opacity-60">Sur rendez-vous</span>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CONTACT --- */}
        {page === 'contact' && (
          <div className="w-full text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase">Nous Contacter</h2>
            <p className="text-xl mb-4">Envie de nous rejoindre ou de nous poser une question ?</p>
            <p className="text-blue-300 font-bold text-2xl">asmc.bouglainval@gmail.com</p>
          </div>
        )}

      </main>

      {/* 3. FOOTER */}
      <footer className="w-full text-center py-8 text-xs tracking-[0.3em] opacity-40 uppercase">
        © 2026 ASMC Bouglainval · Site par Skybound Studio
      </footer>

    </div>
  );
}

export default App;