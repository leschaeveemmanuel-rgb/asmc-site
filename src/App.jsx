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

      {/* 2. ZONE DE CONTENU DYNAMIQUE */}
      <main className="w-full max-w-6xl flex flex-col gap-8">
        
        {/* --- PAGE ACCUEIL AVEC BANNIÈRE --- */}
        {page === 'accueil' && (
          <div className="animate-in fade-in duration-700 flex flex-col gap-8">
            
            {/* SECTION BANNIÈRE */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden glass-card p-2">
              <img 
                src="/banner.jpg" 
                alt="Bannière ASMC" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-center px-4">
                  ASMC <span className="text-blue-400 text-3xl md:text-6xl block">Bouglainval</span>
                </h1>
              </div>
            </div>

            {/* TEXTE DE BIENVENUE */}
            <div className="glass-card p-8 md:p-16 text-center">
              <p className="text-xl md:text-3xl text-blue-100 font-light leading-relaxed max-w-4xl mx-auto">
                Bienvenue sur notre terrain virtuel. Ici, nous partageons notre passion pour l'aéromodélisme 
                sous toutes ses formes, du planeur au moteur thermique.
              </p>
              <div className="mt-12 h-1 w-24 bg-blue-400/50 mx-auto rounded-full"></div>
              <p className="mt-8 text-lg italic opacity-60 font-serif">"Le vol est une liberté, le partage est une force."</p>
            </div>
          </div>
        )}

        {/* --- PAGE À PROPOS --- */}
        {page === 'apropos' && (
          <div className="glass-card p-8 md:p-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase tracking-widest">Le Club</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-400 italic">20 ans de passion</h3>
                <p className="opacity-80 leading-relaxed text-lg">
                  L'Avia Sport Modèle Club est avant tout une famille de passionnés située en Eure-et-Loir. 
                  Nous accueillons les débutants comme les experts pour faire vivre le ciel de Bouglainval.
                </p>
              </div>
              <div className="space-y-4 border-l border-white/10 pl-8">
                <h3 className="text-2xl font-bold text-blue-400 italic">Le Terrain</h3>
                <p className="opacity-80 leading-relaxed text-lg">
                  Notre piste est ouverte tous les jours, avec des sessions collectives le weekend. 
                  Un cadre idéal, dégagé et convivial pour piloter en toute sécurité.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE MES AVIONS --- */}
        {page === 'avions' && (
          <div className="glass-card p-8 md:p-20 text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-widest">Le Hangar</h2>
            <p className="text-blue-300 italic mb-12">Les machines de nos membres</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="glass-card aspect-video flex items-center justify-center border-dashed border-white/20 hover:border-blue-400/50 transition-all cursor-pointer group">
                  <span className="opacity-20 group-hover:opacity-100 transition-opacity">Photo à venir</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- PAGE CALENDRIER --- */}
        {page === 'calendrier' && (
          <div className="glass-card p-8 md:p-20 animate-in fade-in duration-500 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase">Agenda des vols</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border-l-8 border-blue-400">
                <div className="text-left">
                  <p className="font-bold text-xl">Session dominicale</p>
                  <p className="opacity-50">Terrain de Bouglainval</p>
                </div>
                <p className="text-blue-300 font-bold">Tous les dimanches</p>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CONTACT --- */}
        {page === 'contact' && (
          <div className="glass-card p-8 md:p-20 text-center animate-in fade-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase">Nous trouver</h2>
            <div className="space-y-8">
              <p className="text-2xl">Envie de décoller avec nous ?</p>
              <div className="p-8 bg-blue-500/10 rounded-full inline-block border border-blue-400/20">
                <p className="text-3xl font-black text-blue-400">asmc.bouglainval@gmail.com</p>
              </div>
              <p className="opacity-60 italic">Réponse rapide garantie par nos membres.</p>
            </div>
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
