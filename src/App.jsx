import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('accueil');
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [expandedOccasion, setExpandedOccasion] = useState(null);

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
              <p className="mt-4 text-blue-100 opacity-60 italic">Présentation de quelques avions présents sur le terrain de l'ASMC</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              
              {/* ANNONCE 1 */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20">
                    <img 
                        src="/radio1.jpg" 
                        alt="Radio Spektrum DX8" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/1e293b/60a5fa?text=Radio+DX8"; }}
                    />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Radio Spektrum DX8</h3><span className="text-sm font-bold text-yellow-400">150 €</span></div>
                  <p className="text-xs leading-relaxed opacity-80 italic">Très bon état, livrée avec récepteur et valise de transport.</p>
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] uppercase opacity-50">Vendu par : Jean-Paul</span>
                    <button onClick={() => setExpandedOccasion(expandedOccasion === 'radio1' ? null : 'radio1')} className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors">
                      {expandedOccasion === 'radio1' ? 'Fermer ▲' : 'Détails →'}
                    </button>
                  </div>
                  {expandedOccasion === 'radio1' && (
                    <div className="mt-4 p-4 rounded-xl bg-white/5 border-t border-white/10 animate-in slide-in-from-top-4 duration-300 text-xs space-y-2">
                      <p><strong>État :</strong> Occasion (très bon état)</p>
                      <p><strong>Description :</strong> Radio programmée pour plusieurs modèles, batterie LiPo incluse. Possibilité de démonstration au terrain.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* ANNONCE 2 */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20">
                    <img 
                        src="/moteur-os46.jpg" 
                        alt="Moteur OS 46 AX" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/1e293b/60a5fa?text=Moteur+OS46"; }}
                    />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Moteur OS 46 AX</h3><span className="text-sm font-bold text-yellow-400">80 €</span></div>
                  <p className="text-xs leading-relaxed opacity-80 italic">Moteur thermique rodé, excellente compression. Vendu avec silencieux.</p>
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] uppercase opacity-50">Vendu par : Marc</span>
                    <button onClick={() => setExpandedOccasion(expandedOccasion === 'moteur1' ? null : 'moteur1')} className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors">
                      {expandedOccasion === 'moteur1' ? 'Fermer ▲' : 'Détails →'}
                    </button>
                  </div>
                  {expandedOccasion === 'moteur1' && (
                    <div className="mt-4 p-4 rounded-xl bg-white/5 border-t border-white/10 animate-in slide-in-from-top-4 duration-300 text-xs space-y-2">
                      <p><strong>État :</strong> Rodé, peu d'heures de vol.</p>
                      <p><strong>Description :</strong> Moteur fiable et puissant pour avions de classe 40-46. Vendu car passage à l'électrique.</p>
                    </div>
                  )}
                </div>
              </div>
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
              <div className="glass-card p-8 border-t-2 border-blue-400/30">
                <div className="space-y-6 text-sm leading-relaxed opacity-90">
                  <p className="font-bold text-blue-300 uppercase tracking-widest mb-4 text-lg text-center">Informations importantes</p>
                  <p>Pour devenir membre de l'ASMC Bouglainval, nous vous invitons à télécharger et à prendre connaissance des documents <strong>"Formulaire d'inscription"</strong> et <strong>"Règlement intérieur"</strong> disponibles ci-contre.</p>
                  <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-400/20 italic space-y-4">
                    <p><strong>Note :</strong> Votre inscription au Club ASMC Bouglainval et la prise de licence FFAM s'effectuent EXCLUSIVEMENT depuis le site officiel de la FFAM.</p>
                    <p className="not-italic font-bold text-center border-t border-blue-400/10 pt-4">Contact : M. Alain Lernould<br/>alain.lernould@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-6 border-t-2 border-yellow-400/30 space-y-4">
                  <h3 className="text-xl font-bold text-yellow-300 uppercase tracking-widest">Cotisations 2026</h3>
                  <div className="rounded-xl overflow-hidden border border-white/10"><a href="/tarifs-2026.jpg" target="_blank" rel="noopener noreferrer"><img src="/tarifs-2026.jpg" alt="Tableau des tarifs" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" /></a></div>
                </div>
                <div className="glass-card p-6 border-t-2 border-green-500/30 space-y-4">
                  <h3 className="text-xl font-bold text-green-300 uppercase tracking-widest">Documents PDF</h3>
                  <div className="space-y-2">
                    <a href="/formulaire-inscription.pdf" target="_blank" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"><span className="text-xs font-bold uppercase">Formulaire d'inscription</span><span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span></a>
                    <a href="/reglement-interieur.pdf" target="_blank" className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"><span className="text-xs font-bold uppercase">Règlement Intérieur</span><span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span></a>
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
              <p className="mt-4 text-blue-100 opacity-80 italic">Les prochains rendez-vous en 2026</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="glass-card p-6 flex flex-col items-stretch gap-6 hover:border-blue-400/30 transition-colors">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-500/20 rounded-2xl border border-blue-400/30 flex flex-col items-center justify-center"><span className="text-xs uppercase tracking-tighter opacity-60 text-blue-100">Juillet</span><span className="text-3xl font-black text-blue-400">10</span></div>
                  <div className="flex-grow text-center md:text-left space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"><h3 className="text-xl font-bold uppercase tracking-wide text-white">Fête du Club</h3><span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase">Annuel</span></div>
                    <p className="text-sm opacity-70">Vols de découverte, démonstrations et convivialité au terrain de Bouglainval.</p>
                    <button onClick={() => setExpandedEvent(expandedEvent === 'fete' ? null : 'fete')} className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 hover:text-blue-300 transition-colors pt-2">{expandedEvent === 'fete' ? '▲ Réduire' : '▼ En savoir plus...'}</button>
                  </div>
                  <div className="flex-shrink-0 w-24 h-24 group/img"><a href="/avion-ecole.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative"><img src="/avion-ecole.jpg" alt="Affiche" className="w-full h-full object-cover rounded-xl border border-white/10" /></a></div>
                </div>
                {expandedEvent === 'fete' && <div className="mt-4 p-6 rounded-xl bg-white/5 border-t border-white/10 animate-in slide-in-from-top-4 duration-300"><p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">La traditionnelle fête de l'ASMC est le moment fort de notre saison !{"\n\n"}Au programme : Barbecue géant, démonstrations et ateliers.</p></div>}
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE PARTENAIRES --- */}
        {page === 'partenaires' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Nos Partenaires</h2><p className="mt-4 text-blue-100 opacity-60 italic">Ils soutiennent l'ASMC Bouglainval</p></div>
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-8 hover:border-blue-400/30 transition-colors group">
                <div className="flex-shrink-0 w-32 h-32 bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-2"><img src="/sponsor1.jpg" alt="Logo Partenaire" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=NASA"; }} /></div>
                <div className="flex-grow text-center md:text-left space-y-3">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white">NASA</h3>
                  <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-bold transition-colors inline-block">www.nasa.gov ↗</a>
                  <p className="text-sm opacity-70 leading-relaxed max-w-2xl">National Aeronautics and Space Administration. NASA. Toute l'histoire de la conquête spatiale résumée en ces quatre lettres.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CONTACT --- */}
        {page === 'contact' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Nous Contacter</h2><p className="mt-4 text-blue-100 opacity-60 italic">L'équipe de l'ASMC est à votre écoute</p></div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="glass-card p-8 border-t-2 border-blue-400/30">
                  <h3 className="text-xl font-bold text-blue-300 uppercase mb-6">Le Bureau</h3>
                  <div className="space-y-8">
                    <div><p className="text-xs uppercase tracking-widest text-blue-400">Président</p><p className="text-lg font-bold">Jean François Albert</p><p className="text-sm opacity-70 italic">jf.albert41@gmail.com</p></div>
                    <div><p className="text-xs uppercase tracking-widest text-blue-400">Secrétaire Général</p><p className="text-lg font-bold">Alain Lernould</p><p className="text-sm opacity-70 italic">alain.lernould95@gmail.com</p></div>
                  </div>
                </div>
                <a href="mailto:asmc.bouglainval@gmail.com" className="glass-card w-full p-6 flex items-center justify-center gap-4 group hover:bg-blue-400/10 transition-all border-blue-400/20"><span className="text-2xl text-blue-400">✉</span><span className="text-xl font-black uppercase tracking-[0.3em] group-hover:text-blue-400">Nous Écrire</span></a>
                <a href="https://www.facebook.com/profile.php?id=61570488785828" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center justify-between group hover:bg-blue-600/10 border-blue-600/20 transition-all"><div className="flex items-center gap-4"><div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"><img src="/logo-fb.png" className="w-8 h-8 object-contain" /></div><div><p className="text-sm font-bold uppercase tracking-widest text-blue-100">Suivez-nous</p><p className="text-[10px] text-blue-400 font-bold uppercase mt-1">Cliquez ici</p></div></div><span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span></a>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-8 h-full border-t-2 border-green-500/30 flex flex-col">
                  <h3 className="text-xl font-bold text-green-300 uppercase mb-4 tracking-widest">Localisation</h3>
                  <p className="text-sm opacity-70 mb-6">Le terrain se situe à Bouglainval (28130).</p>
                  <div className="w-full aspect-square md:aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2219.9964047900944!2d1.496325068196813!3d48.57086848593413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4054f6111963d%3A0xc2320d0b5a67bc7c!2sNouveau%20terrain%20ASMC!5e0!3m2!1sfr!2sfr!4v1770806956045!5m2!1sfr!2sfr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale-[20%] contrast-[1.1] opacity-90 group-hover:opacity-100 transition-opacity"></iframe></div>
                  <div className="mt-6"><a href="https://www.google.com/maps/dir/?api=1&destination=48.5709,1.4955" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-blue-500/10 border border-blue-400/30 text-blue-300 font-bold uppercase text-sm">📍 Itinéraire vers le terrain</a></div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="w-full text-center py-12 flex flex-col gap-6 text-[10px] tracking-[0.3em] opacity-30 uppercase">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a href="/mentions-legales.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Mentions légales</a>
          <a href="/politique-confidentialite.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Confidentialité</a>
          <a href="/cgu.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">CGU</a>
          <a href="/cookies.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Cookies</a>
        </div>
        <div className="tracking-[0.4em]">© 2026 ASMC Bouglainval · Skybound Studio</div>
      </footer>

    </div>
  );
}

export default App;