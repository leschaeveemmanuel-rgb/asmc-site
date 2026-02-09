import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('accueil');

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white font-sans">
      
      {/* 1. BARRE DE NAVIGATION */}
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
            <div className="w-full rounded-3xl overflow-hidden glass-card p-1 shadow-2xl">
              <img 
                src="/banner.png" 
                alt="Bannière ASMC" 
                className="w-full h-auto rounded-2xl opacity-90 block"
              />
            </div>

            <div className="glass-card p-8 md:p-16 space-y-10">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">
                  ASMC Bouglainval
                </h1>
                <div className="h-1 w-20 bg-blue-400/30 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-3">
                <p className="text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                  Soyez les bienvenus dans l'univers de l'Avia Sport Modèle Club de Bouglainval.
                </p>
                <div className="space-y-3 text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                  <p>Ici, nous allons vous présenter notre passion pour les modèles réduits d'avions, en toute simplicité et avec humilité.</p>
                  <p>Avec un peu de chance, cela pourrait vous donner l'envie de nous rejoindre et de vous lancer dans l'aventure passionnante du pilotage d'avions radiocommandés.</p>
                </div>
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
      <p className="mt-4 text-blue-100 opacity-60 italic">Une passion partagée sur notre terrain de Bouglainval</p>
    </div>

    {/* GRILLE D'INFORMATIONS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
      
      <div className="glass-card p-8 space-y-4 border-t-2 border-blue-500/30">
        <h3 className="text-xl font-bold text-blue-300 uppercase tracking-tighter">Notre Histoire</h3>
        <p className="text-sm opacity-80 leading-relaxed">
          Depuis plus de 20 ans, l'Avia Sport Modèle Club rassemble les passionnés d'aéromodélisme. Notre club est un lieu d'échange technique et de convivialité.
        </p>
      </div>

      <div className="glass-card p-8 space-y-4 border-t-2 border-green-500/30">
        <h3 className="text-xl font-bold text-green-300 uppercase tracking-tighter">Le Terrain</h3>
        <p className="text-sm opacity-80 leading-relaxed">
          Notre plateforme à Bouglainval offre un espace de vol dégagé, idéal pour toutes les catégories de modèles, du planeur au moteur thermique.
        </p>
      </div>

      <div className="glass-card p-8 space-y-4 border-t-2 border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-300 uppercase tracking-tighter">L'Apprentissage</h3>
        <p className="text-sm opacity-80 leading-relaxed">
          Nous accompagnons les nouveaux pilotes dans leurs premiers vols avec bienveillance, en mettant l'accent sur la sécurité et le plaisir du pilotage.
        </p>
      </div>
    </div>

    {/* AFFICHAGE DE L'IMAGE DU TERRAIN */}
    <div className="max-w-6xl mx-auto">
      <div className="glass-card p-2 shadow-2xl overflow-hidden">
        <img 
          src="/terrain.jpg" 
          alt="Terrain de l'ASMC Bouglainval" 
          className="w-full h-[300px] md:h-[500px] object-cover rounded-xl opacity-90"
          onError={(e) => { e.target.src = "https://via.placeholder.com/1200x500/1e293b/60a5fa?text=Image+Terrain+en+attente"; }}
        />
      </div>
    </div>
  </div>
)}
        

        {/* --- PAGE MES AVIONS --- */}
        {page === 'avions' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-blue-400">Le Hangar</h2>
              <p className="mt-4 text-blue-100 opacity-60 italic">Inventaire technique de la flotte ASMC</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/*---PREMIER AVION---*/}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20">
                  <img 
                    src="/cessna172.jpg" 
                    alt="Cessna 172" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/1e293b/60a5fa?text=Image+en+attente"; }}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Cessna 172</h3>
                    <span className="text-xs bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30 uppercase">Electrique</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div>
                      <p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p>
                      <p className="font-mono">1400 mm</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p>
                      <p className="font-mono">4534</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed opacity-60">
                    Un avion de début stable et précis, idéal pour les sessions d'apprentissage. Très bel aspect Maquette.
                  </p>
                </div>
              </div>

              {/*---SECOND AVION---*/}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20">
                  <img 
                    src="/extra330.jpg" 
                    alt="Extra 330" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/1e293b/60a5fa?text=Image+en+attente"; }}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Extra 330</h3>
                    <span className="text-xs bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30 uppercase">Thermique</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div>
                      <p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p>
                      <p className="font-mono">1600 mm</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p>
                      <p className="font-mono">OS45</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed opacity-60">
                    Un avion de voltige performant et précis. Cet appareil demande expérience et dextérité.
                  </p>
                </div>
              </div>

              {/*---TROISIEME AVION---*/}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20">
                  <img 
                    src="/corsair2.jpg" 
                    alt="Corsair F'-U" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/1e293b/60a5fa?text=Image+en+attente"; }}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Corsair F4-U</h3>
                    <span className="text-xs bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30 uppercase">Electrique</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div>
                      <p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p>
                      <p className="font-mono">1400 mm</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p>
                      <p className="font-mono">5544</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed opacity-60">
                    Un Warbird impressionnat symbolisant une lourde histoire de l'aéronautique. Une machine superbe en vol avec une belle inertie et des lignes de vol tendues. Cet avion nécessite un peu d'expérience.
                  </p>
                </div>
              </div>

              

              <div className="glass-card flex flex-col items-center justify-center p-8 border-dashed border-white/20 opacity-40 hover:opacity-100 transition-all cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform text-blue-400">+</div>
                <p className="text-xs uppercase tracking-widest">Ajouter un appareil</p>
              </div>
            </div>
          </div>
        )}

        {/* --- CALENDRIER --- */}
        {page === 'calendrier' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Agenda du Club</h2>
      <p className="mt-4 text-blue-100 opacity-60 italic">Les prochains rendez-vous à ne pas manquer</p>
    </div>

    <div className="max-w-5xl mx-auto space-y-6">
      
      
      {/* EVENEMENT 21 JUIN 2026 */}
      <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-6 hover:border-blue-400/30 transition-colors">
        
        {/* GAUCHE : LA DATE (w-24 h-24) */}
        <div className="flex-shrink-0 w-24 h-24 bg-blue-500/20 rounded-2xl border border-blue-400/30 flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-tighter opacity-60 text-blue-100">Juin</span>
          <span className="text-3xl font-black text-blue-400">21</span>
        </div>

        {/* CENTRE : INFOS ÉVÉNEMENT */}
        <div className="flex-grow text-center md:text-left space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <h3 className="text-xl font-bold uppercase tracking-wide text-white">Rencontre GPR</h3>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase w-fit mx-auto md:mx-0">Événement exceptionnel</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed text-blue-50">
            Rencontre Grands Planneurs Radiocommandés. Restauration sur place. Entrée gratuite.
          </p>
        </div>

        {/* DROITE : LA VIGNETTE (Taille identique à la date : w-24 h-24) */}
        <div className="flex-shrink-0 w-24 h-24 group/img">
          <a 
            href="/gpr.png" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full relative"
          >
            <img 
              src="/gpr.png" 
              alt="Affiche événement" 
              className="w-full h-full object-cover rounded-xl border border-white/10 group-hover/img:border-blue-400/50 transition-all shadow-lg"
              onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=Affiche"; }}
            />
            {/* Petit indicateur de zoom au survol */}
            <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center rounded-xl transition-opacity text-white text-xs font-bold">
              VOIR
            </div>
          </a>
        </div>
      </div>

      {/* EVENEMENT 10 JUILLET 2026 */}
      <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-6 hover:border-blue-400/30 transition-colors">
        
        {/* GAUCHE : LA DATE (w-24 h-24) */}
        <div className="flex-shrink-0 w-24 h-24 bg-blue-500/20 rounded-2xl border border-blue-400/30 flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-tighter opacity-60 text-blue-100">Juillet</span>
          <span className="text-3xl font-black text-blue-400">10</span>
        </div>

        {/* CENTRE : INFOS ÉVÉNEMENT */}
        <div className="flex-grow text-center md:text-left space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <h3 className="text-xl font-bold uppercase tracking-wide text-white">Fête du Club</h3>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase w-fit mx-auto md:mx-0">Événement Annuel</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed text-blue-50">
            Nombreux vols toute la journée, Vols de découverte ouverts au public, entrée gratuite.
          </p>
        </div>

        {/* DROITE : LA VIGNETTE (Taille identique à la date : w-24 h-24) */}
        <div className="flex-shrink-0 w-24 h-24 group/img">
          <a 
            href="/image.png" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full relative"
          >
            <img 
              src="/image.png" 
              alt="Affiche événement" 
              className="w-full h-full object-cover rounded-xl border border-white/10 group-hover/img:border-blue-400/50 transition-all shadow-lg"
              onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=Affiche"; }}
            />
            {/* Petit indicateur de zoom au survol */}
            <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center rounded-xl transition-opacity text-white text-xs font-bold">
              VOIR
            </div>
          </a>
        </div>
      </div>

      {/* Répéter ce bloc pour chaque événement... */}

    </div>
  </div>
        )}

        {/* --- CONTACT --- */}
        {page === 'contact' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Nous Contacter</h2>
      <p className="mt-4 text-blue-100 opacity-60 italic">L'équipe de l'ASMC est à votre écoute</p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* 1. LES COORDONNÉES DU BUREAU */}
      <div className="space-y-6">
        <div className="glass-card p-8 border-t-2 border-blue-400/30">
          <h3 className="text-xl font-bold text-blue-300 uppercase mb-6">Le Bureau</h3>
          
          <div className="space-y-8">
            {/* PRÉSIDENT */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-blue-400">Président</p>
              <p className="text-lg font-bold">Jean François Albert</p>
              <p className="text-sm opacity-70">Mail : jf.albert41@gmail.com</p>
            </div>

            {/* SECRÉTAIRE */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-blue-400">Secrétaire Général</p>
              <p className="text-lg font-bold">Alain Lernould</p>
              <p className="text-sm opacity-70">27 rue de Grez — 28170 FONTAINE LES RIBOUTS</p>
              <p className="text-sm opacity-70 italic">Lieu dit : BOUTRY</p>
              <div className="pt-2">
                <p className="text-sm">Tél : 07 7 728 02 57</p>
                <p className="text-sm">Mail : alain.lernould95@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOUTON NOUS ÉCRIRE */}
        <a 
          href="mailto:asmc.bouglainval@gmail.com"
          className="glass-card w-full p-6 flex items-center justify-center gap-4 group hover:bg-blue-400/10 transition-all border-blue-400/20"
        >
          <span className="text-2xl">✉</span>
          <span className="text-xl font-black uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">Nous Écrire</span>
        </a>

        {/* SECTION FACEBOOK / QR CODE */}
        <div className="glass-card p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl overflow-hidden border border-white/10">
              <img src="/logo-fb.png" alt="Facebook" className="w-full h-full object-contain p-2" onError={(e) => e.target.src="https://via.placeholder.com/64?text=FB"} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase">Suivez-nous</p>
              <p className="text-xs opacity-50">Actualités du club</p>
            </div>
          </div>
          <div className="w-20 h-20 bg-white rounded-lg p-1">
            <img src="/qrcode-fb.png" alt="QR Code Facebook" className="w-full h-full object-contain" onError={(e) => e.target.src="https://via.placeholder.com/80?text=QR"} />
          </div>
        </div>
      </div>

      {/* 2. LE TERRAIN ET CARTOGRAPHIE */}
      <div className="space-y-6">
        <div className="glass-card p-8 space-y-6 h-full border-t-2 border-green-500/30">
          <h3 className="text-xl font-bold text-green-300 uppercase">Localisation du Terrain</h3>
          <p className="text-sm opacity-70">
            Notre terrain est situé sur la commune de **Bouglainval (28130)**. 
            Vous pouvez nous retrouver tous les week-ends pour les sessions de vol.
          </p>

          <div className="grid grid-cols-1 gap-4 mt-6">
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <img src="/carte-plan.png" alt="Carte Google Maps" className="w-full h-full object-cover" onError={(e) => e.target.src="https://via.placeholder.com/600x300/1e293b/60a5fa?text=Carte+Plan"} />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <img src="/carte-satellite.png" alt="Photo Satellite" className="w-full h-full object-cover" onError={(e) => e.target.src="https://via.placeholder.com/600x300/1e293b/60a5fa?text=Photo+Satellite"} />
            </div>
          </div>
        </div>
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