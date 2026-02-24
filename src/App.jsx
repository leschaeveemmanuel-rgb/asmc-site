import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('accueil');
  const [expandedEvent, setExpandedEvent] = useState(null);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white font-sans">
      
      {/* 1. BARRE DE NAVIGATION */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-lg md:text-sm font-bold tracking-[0.2em] uppercase z-10">
        <button onClick={() => setPage('accueil')} className={`transition-all duration-300 py-2 ${page === 'accueil' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Accueil</button>
        <button onClick={() => setPage('apropos')} className={`transition-all duration-300 py-2 ${page === 'apropos' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>À Propos</button>
        <button onClick={() => setPage('avions')} className={`transition-all duration-300 py-2 ${page === 'avions' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Le Hangar</button>
        <button onClick={() => setPage('occasions')} className={`transition-all duration-300 py-2 ${page === 'occasions' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Occasions</button>
        <button onClick={() => setPage('inscription')} className={`transition-all duration-300 py-2 ${page === 'inscription' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>S'inscrire</button>
        <button onClick={() => setPage('calendrier')} className={`transition-all duration-300 py-2 ${page === 'calendrier' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Calendrier</button>
        <button onClick={() => setPage('partenaires')} className={`transition-all duration-300 py-2 ${page === 'partenaires' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Nos Partenaires</button>
        <button onClick={() => setPage('contact')} className={`transition-all duration-300 py-2 ${page === 'contact' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Contacts</button>
      </nav>

      <main className="w-full max-w-6xl flex flex-col gap-8">
        
        {/* --- PAGE ACCUEIL --- */}
        {page === 'accueil' && (
          <div className="animate-in fade-in duration-700 flex flex-col gap-8 text-center">
            <div className="w-full rounded-3xl overflow-hidden glass-card p-1 shadow-2xl">
              <img src="/banner.jpg" alt="Bannière ASMC" className="w-full h-auto rounded-2xl opacity-90 block" />
            </div>
            <div className="glass-card p-8 md:p-16 space-y-10">
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">ASMC Bouglainval</h1>
              <div className="space-y-3 text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                <p>Soyez les bienvenus dans l'univers de l'Avia Sport Modèle Club de Bouglainval.</p>
                <p>Ici, nous allons vous présenter notre passion pour les modèles réduits d'avions, en toute simplicité et avec humilité.</p>
                <p>Avec un peu de chance, cela pourrait vous donner l'envie de nous rejoindre et de vous lancer dans l'aventure passionnante du pilotage d'avions radiocommandés.</p>
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
              <p className="mt-4 text-blue-100 opacity-80 italic">Une passion partagée sur notre terrain de Bouglainval</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="glass-card p-8 space-y-4 border-t-2 border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-300 uppercase tracking-tighter">Notre Histoire</h3>
                <p className="text-sm opacity-80 leading-relaxed">Depuis plus de 20 ans, l'Avia Sport Modèle Club rassemble les passionnés d'aéromodélisme. Notre club est un lieu d'échange technique et de convivialité.</p>
              </div>
              <div className="glass-card p-8 space-y-4 border-t-2 border-green-500/30">
                <h3 className="text-xl font-bold text-green-300 uppercase tracking-tighter">Le Terrain</h3>
                <p className="text-sm opacity-80 leading-relaxed">Notre plateforme à Bouglainval offre un espace de vol dégagé, idéal pour toutes les catégories de modèles, du planeur au moteur thermique. Avec une piste en gazon de 150 m de long sur 15 m de large orientée Nord - Sud, nous offrons de grandes possibilités d'exploitation.</p>
              </div>
              <div className="glass-card p-8 space-y-4 border-t-2 border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-300 uppercase tracking-tighter">L'Apprentissage</h3>
                <p className="text-sm opacity-80 leading-relaxed">Nous accompagnons les nouveaux pilotes dans leurs premiers vols avec bienveillance, en mettant l'accent sur la sécurité et le plaisir du pilotage.</p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="glass-card p-2 shadow-2xl overflow-hidden">
                <img src="/terrain.jpg" alt="Terrain de l'ASMC Bouglainval" className="w-full h-[300px] md:h-[500px] object-cover rounded-xl opacity-90" onError={(e) => { e.target.src = "https://via.placeholder.com/1200x500/1e293b/60a5fa?text=Image+Terrain"; }} />
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE LE HANGAR --- */}
        {page === 'avions' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-blue-400">Le Hangar</h2>
              <p className="mt-4 text-blue-100 opacity-80 italic">Présentation de quelques avions présents sur le terrain de l'ASMC</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* NOUVEL AVION BLOC A RECOPIER*/}
              {/* CESSNA */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20"><img src="/cessna172.jpg" alt="Cessna 172" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Cessna"} /></div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Cessna 172</h3><span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase">Electrique</span></div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p><p className="font-mono">1400 mm</p></div>
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p><p className="font-mono">4534</p></div>
                  </div>
                  <p className="text-xs leading-relaxed opacity-80 italic">Un avion de début stable et précis, idéal pour les sessions d'apprentissage.</p>
                </div>
              </div>
              {/* FIN DE BLOC A RECOPIER*/}

              {/* NOUVEL AVION BLOC A RECOPIER*/}
              {/* EXTRA */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20"><img src="/extra330.jpg" alt="Extra 330" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Extra"} /></div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Extra 330</h3><span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase">Thermique</span></div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p><p className="font-mono">1600 mm</p></div>
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p><p className="font-mono">OS45</p></div>
                  </div>
                  <p className="text-xs leading-relaxed opacity-80 italic">Un avion de voltige performant et précis pour pilotes confirmés.</p>
                </div>
              </div>
              {/* FIN DE BLOC A RECOPIER*/}

              {/* NOUVEL AVION BLOC A RECOPIER*/}
              {/* CORSAIR */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20"><img src="/corsair2.jpg" alt="Corsair F4-U" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Corsair"} /></div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Corsair F4-U</h3><span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase">Electrique</span></div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p><p className="font-mono">1400 mm</p></div>
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p><p className="font-mono">5544</p></div>
                  </div>
                  <p className="text-xs leading-relaxed opacity-80 italic">Un Warbird légendaire nécessitant une certaine expérience de pilotage.</p>
                </div>
              </div>
              {/* FIN DE BLOC A RECOPIER*/}

            </div>
          </div>
        )}

        {/* --- PAGE OCCASIONS --- */}
        {page === 'occasions' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-blue-400">Petites Annonces</h2>
              <p className="mt-4 text-blue-100 opacity-80 italic">Matériel d'occasion proposé par les membres du club</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* NOUVELLE ANNONCE BLOC A RECOPIER*/}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20 flex items-center justify-center italic opacity-40">Photo à venir</div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Radio Spektrum DX8</h3>
                    <span className="text-sm font-bold text-yellow-400">150 €</span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-80 italic">Très bon état, livrée avec récepteur et valise de transport.</p>
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] uppercase opacity-50">Vendu par : Jean-Paul</span>
                    <button className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors">Détails →</button>
                  </div>
                </div>
              </div>
              {/* FIN DE BLOC A RECOPIER*/}

              {/* NOUVELLE ANNONCE BLOC A RECOPIER*/}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20 flex items-center justify-center italic opacity-40">Photo à venir</div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Moteur OS 46 AX</h3>
                    <span className="text-sm font-bold text-yellow-400">80 €</span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-80 italic">Moteur thermique rodé, excellente compression. Vendu avec silencieux.</p>
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] uppercase opacity-50">Vendu par : Marc</span>
                    <button className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors">Détails →</button>
                  </div>
                </div>
              </div>
              {/* FIN DE BLOC A RECOPIER*/}

            </div>
          </div>
        )}

        {/* --- PAGE S'INSCRIRE --- */}
        {page === 'inscription' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Rejoindre l'ASMC</h2>
              <p className="mt-4 text-blue-100 opacity-80 italic">Procédure d'adhésion</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* BLOC DE TEXTE (REMPLACE LE FORMULAIRE) */}
              <div className="glass-card p-8 border-t-2 border-blue-400/30">
                <div className="space-y-6 text-sm leading-relaxed opacity-90">
                  <p className="font-bold text-blue-300 uppercase tracking-widest mb-4 text-lg text-center">Informations importantes</p>
                  
                  <p>
                    Pour devenir membre de l'ASMC Bouglainval, nous vous invitons à télécharger et à prendre connaissance des documents <strong>"Formulaire d'inscription"</strong> et <strong>"Règlement intérieur"</strong> disponibles ci-contre.
                  </p>
                  
                  <p>
                    Ces documents regroupent tous les détails administratifs indispensables, ainsi que les engagements relatifs à la sécurité et à la vie du club.
                  </p>

                  <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-400/20 italic space-y-4">
                    <p>
                      <strong>Note :</strong> Votre inscription au Club ASMC Bouglainval et la prise de licence Fédération Française d'Aéromodélisme s'effectuent EXCLUSIVEMENT depuis le site officiel de la FFAM. Nous vous invitons à prendre connaissance des conditions sur la page dédiée.
                    </p>
                    
                    <p className="not-italic font-bold text-center border-t border-blue-400/10 pt-4">
                      Pour toutes questions, vous pouvez contacter<br/>
                      M. Alain Lernould<br/>
                      alain.lernould@gmail.com
                    </p>
                  </div>

                  <p className="text-center pt-4 opacity-80">
                    N'hésitez pas à venir nous rencontrer au terrain pour échanger directement avec les membres du bureau.
                  </p>
                </div>
              </div>

              {/* COLONNE DROITE : TARIFS ET DOCUMENTS */}
              <div className="space-y-6">
                <div className="glass-card p-6 border-t-2 border-yellow-400/30 space-y-4">
                  <h3 className="text-xl font-bold text-yellow-300 uppercase tracking-widest">Cotisations 2026</h3>
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <a href="/tarifs-2026.jpg" target="_blank" rel="noopener noreferrer">
                      <img src="/tarifs-2026.jpg" alt="Tableau des tarifs" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
                    </a>
                  </div>
                </div>
                <div className="glass-card p-6 border-t-2 border-green-500/30 space-y-4">
                  <h3 className="text-xl font-bold text-green-300 uppercase tracking-widest">Documents PDF</h3>
                  <div className="space-y-2">
                    <a href="/formulaire-inscription.pdf" target="_blank" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                      <span className="text-xs font-bold uppercase">Formulaire d'inscription</span>
                      <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a href="/reglement-interieur.pdf" target="_blank" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                      <span className="text-xs font-bold uppercase">Règlement Intérieur</span>
                      <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CALENDRIER --- */}
        {page === 'calendrier' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Agenda du Club</h2>
              <p className="mt-4 text-blue-100 opacity-60 italic">Les prochains rendez-vous à ne pas manquer en 2026</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
              {/* EVENEMENT 1 BLOC A RECOPIER*/}
              <div className="glass-card p-6 flex flex-col items-stretch gap-6 hover:border-blue-400/30 transition-colors">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-500/20 rounded-2xl border border-blue-400/30 flex flex-col items-center justify-center">
                    <span className="text-xs uppercase tracking-tighter opacity-60 text-blue-100">Juillet</span>
                    <span className="text-3xl font-black text-blue-400">10</span>
                  </div>
                  <div className="flex-grow text-center md:text-left space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"><h3 className="text-xl font-bold uppercase tracking-wide text-white">Fête du Club</h3><span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase w-fit mx-auto md:mx-0">Annuel</span></div>
                    <p className="text-sm opacity-70">Vols de découverte, démonstrations et convivialité au terrain de Bouglainval.</p>
                    <button onClick={() => setExpandedEvent(expandedEvent === 'fete' ? null : 'fete')} className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 hover:text-blue-300 transition-colors pt-2">{expandedEvent === 'fete' ? '▲ Réduire' : '▼ En savoir plus...'}</button>
                  </div>
                  <div className="flex-shrink-0 w-24 h-24 group/img"><a href="/avion-ecole.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative"><img src="/avion-ecole.jpg" alt="Affiche" className="w-full h-full object-cover rounded-xl border border-white/10" /></a></div>
                </div>
                {expandedEvent === 'fete' && (
                  <div className="mt-4 p-6 rounded-xl bg-white/5 border-t border-white/10 animate-in slide-in-from-top-4 duration-300">
                    <p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">La traditionnelle fête de l'ASMC