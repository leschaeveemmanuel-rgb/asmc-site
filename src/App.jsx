import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('accueil');

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white font-sans">
      
      {/* 1. BARRE DE NAVIGATION (Ajout de S'inscrire) */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-lg md:text-sm font-bold tracking-[0.2em] uppercase z-10">
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
          Le Hangar
        </button>
        <button 
          onClick={() => setPage('inscription')} 
          className={`transition-all duration-300 py-2 ${page === 'inscription' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}
        >
          S'inscrire
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

      {/* 2. ZONE DE CONTENU PRINCIPALE */}
      <main className="w-full max-w-6xl flex flex-col gap-8">
        
        {/* --- PAGE ACCUEIL --- */}
        {page === 'accueil' && (
          <div className="animate-in fade-in duration-700 flex flex-col gap-8 text-center">
            <div className="w-full rounded-3xl overflow-hidden glass-card p-1 shadow-2xl">
              <img src="/banner.png" alt="Bannière ASMC" className="w-full h-auto rounded-2xl opacity-90 block" />
            </div>
            <div className="glass-card p-8 md:p-16 space-y-10">
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">ASMC Bouglainval</h1>
              <div className="space-y-3 text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                <p>Soyez les bienvenus dans l'univers de l'Avia Sport Modèle Club de Bouglainval.</p>
                <p>Ici, nous allons vous présenter notre passion pour les modèles réduits d'avions.</p>
              </div>
              <p className="text-2xl font-serif italic text-blue-300">Bonne visite !</p>
            </div>
          </div>
        )}

        {/* --- PAGE À PROPOS --- */}
        {page === 'apropos' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">L'Esprit ASMC</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="glass-card p-8 border-t-2 border-blue-500/30 font-bold uppercase text-blue-300">Notre Histoire</div>
              <div className="glass-card p-8 border-t-2 border-green-500/30 font-bold uppercase text-green-300">Le Terrain</div>
              <div className="glass-card p-8 border-t-2 border-purple-500/30 font-bold uppercase text-purple-300">L'Apprentissage</div>
            </div>
          </div>
        )}

        {/* --- PAGE LE HANGAR --- */}
        {page === 'avions' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-center text-3xl md:text-5xl font-bold uppercase text-blue-400 mb-12">Le Hangar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass-card overflow-hidden group">
                <div className="aspect-video overflow-hidden"><img src="/avion1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Cessna"} /></div>
                <div className="p-6"><h3 className="text-xl font-bold text-blue-300 uppercase">Cessna 172</h3></div>
              </div>
              <div className="glass-card overflow-hidden group">
                <div className="aspect-video overflow-hidden"><img src="/avion2.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Extra"} /></div>
                <div className="p-6"><h3 className="text-xl font-bold text-blue-300 uppercase">Extra 330</h3></div>
              </div>
              <div className="glass-card overflow-hidden group">
                <div className="aspect-video overflow-hidden"><img src="/avion3.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Corsair"} /></div>
                <div className="p-6"><h3 className="text-xl font-bold text-blue-300 uppercase">Corsair F4-U</h3></div>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE S'INSCRIRE (Nouvelle section) --- */}
        {page === 'inscription' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Rejoindre l'ASMC</h2>
              <p className="mt-4 text-blue-100 opacity-60 italic">Toutes les informations pour devenir membre du club</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* GAUCHE : LES TARIFS (Image Excel) */}
              <div className="glass-card p-6 border-t-2 border-blue-400/30 space-y-4">
                <h3 className="text-xl font-bold text-blue-300 uppercase tracking-widest">Cotisations Annuelles</h3>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
                  {/* Remplacez 'tarifs.jpg' par le nom de votre capture Excel */}
                  <img src="/tarifs.jpg" alt="Tableau des tarifs" className="w-full h-auto" onError={(e) => e.target.src="https://via.placeholder.com/600x400/1e293b/60a5fa?text=Tableau+des+Tarifs"} />
                </div>
                <p className="text-[10px] opacity-40 uppercase text-center italic">Dernière mise à jour : 2026</p>
              </div>

              {/* DROITE : DOCUMENTS À TÉLÉCHARGER */}
              <div className="space-y-6">
                <div className="glass-card p-8 border-t-2 border-green-500/30 space-y-6 h-full">
                  <h3 className="text-xl font-bold text-green-300 uppercase tracking-widest">Documents Utiles</h3>
                  
                  <div className="space-y-4">
                    {/* DOCUMENT 1 */}
                    <a 
                      href="/formulaire-inscription.pdf" 
                      target="_blank" 
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-green-500/10 hover:border-green-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl text-red-400 group-hover:scale-110 transition-transform">📄</span>
                        <div>
                          <p className="text-sm font-bold uppercase">Formulaire d'inscription</p>
                          <p className="text-[10px] opacity-50 uppercase">PDF à imprimer et remplir</p>
                        </div>
                      </div>
                      <span className="text-green-400 font-bold">TÉLÉCHARGER</span>
                    </a>

                    {/* DOCUMENT 2 */}
                    <a 
                      href="/reglement-interieur.pdf" 
                      target="_blank" 
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-green-500/10 hover:border-green-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl text-blue-400 group-hover:scale-110 transition-transform">📜</span>
                        <div>
                          <p className="text-sm font-bold uppercase">Règlement Intérieur</p>
                          <p className="text-[10px] opacity-50 uppercase">Statuts et règles du club</p>
                        </div>
                      </div>
                      <span className="text-green-400 font-bold">TÉLÉCHARGER</span>
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs opacity-70 leading-relaxed italic">
                    Note : Les dossiers complets sont à remettre au Secrétaire Général Alain Lernould ou au Président Jean François Albert lors de votre passage au terrain.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- PAGE CALENDRIER --- */}
        {page === 'calendrier' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-center text-3xl md:text-5xl font-bold uppercase text-blue-400 mb-12">Agenda du Club</h2>
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-blue-500/20 rounded-2xl flex flex-col items-center justify-center border border-blue-400/30">
                  <span className="text-xs uppercase opacity-60">Juillet</span>
                  <span className="text-3xl font-black text-blue-400">10</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold uppercase">Fête du Club</h3>
                  <p className="text-sm opacity-70">Vols de découverte et démonstrations.</p>
                </div>
                <div className="flex-shrink-0 w-24 h-24">
                  <a href="/image.png" target="_blank" rel="noopener noreferrer"><img src="/image.png" className="w-full h-full object-cover rounded-xl" /></a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CONTACT --- */}
        {page === 'contact' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-center text-3xl md:text-5xl font-black uppercase text-blue-400 mb-12">Contact</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="glass-card p-8 border-t-2 border-blue-400/30">
                  <h3 className="text-xl font-bold text-blue-300 uppercase mb-6">Le Bureau</h3>
                  <p className="text-sm opacity-70">Président : Jean François Albert</p>
                  <p className="text-sm opacity-70">Secrétaire : Alain Lernould</p>
                </div>
                
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex items-center justify-between group hover:bg-blue-600/10 transition-all border-blue-600/20"
                >
                  <div className="flex items-center gap-4">
                    <img src="/logo-fb.png" className="w-10 h-10 object-contain" onError={(e) => e.target.src="https://via.placeholder.com/40"} />
                    <div>
                      <p className="text-sm font-bold uppercase">Suivez-nous</p>
                      <p className="text-xs text-blue-400 font-bold uppercase mt-1">Cliquez ici</p>
                    </div>
                  </div>
                  <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </div>

              <div className="glass-card p-8 border-t-2 border-green-500/30 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-green-300 uppercase">Localisation</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.1632734139!2d1.6025!3d48.544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDMyJzM4LjQiTiAxwrAzNicwOS4wIkU!5e0!3m2!1sfr!2sfr!4v1707480000000!5m2!1sfr!2sfr&z=14" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale-[20%] opacity-90"
                  ></iframe>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=48.544,1.6025" target="_blank" rel="noopener noreferrer" className="bg-blue-500/10 p-4 rounded-xl border border-blue-400/30 text-center text-sm font-bold uppercase tracking-widest text-blue-300 hover:bg-blue-400/20 transition-all">
                  📍 Itinéraire vers le terrain
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="w-full text-center py-12 text-xs tracking-[0.4em] opacity-30 uppercase">
        © 2026 ASMC Bouglainval · Skybound Studio
      </footer>
    </div>
  );
}

export default App;