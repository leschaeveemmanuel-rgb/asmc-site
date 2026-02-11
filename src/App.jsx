import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('accueil');
  const [expandedEvent, setExpandedEvent] = useState(null);

  // --- NOUVELLE FONCTION : GESTION DU FORMULAIRE D'INSCRIPTION ---
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '', telephone: '',
    adresse: '', cp: '', ville: '',
    numLicence: '', numTelepilote: '', pratique: 'Avion'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Demande d'inscription ASMC - ${formData.nom} ${formData.prenom}`;
    const body = `Bonjour,

Voici une nouvelle demande d'inscription pour le club ASMC :

IDENTITÉ :
- Nom : ${formData.nom}
- Prénom : ${formData.prenom}
- Email : ${formData.email}
- Téléphone : ${formData.telephone}

ADRESSE :
- ${formData.adresse}
- ${formData.cp} ${formData.ville}

INFOS TECHNIQUES :
- N° Licence FFAM : ${formData.numLicence || 'Non renseigné'}
- N° Exploitant (AlphaTango) : ${formData.numTelepilote || 'Non renseigné'}
- Pratique : ${formData.pratique}

Le dossier complet (Certificat médical, règlement, etc.) sera remis prochainement.`;

    window.location.href = `mailto:asmc.bouglainval@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  // -----------------------------------------------------------

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center gap-8 text-white font-sans">
      
      {/* 1. BARRE DE NAVIGATION */}
      <nav className="glass-card w-full max-w-6xl px-6 py-5 flex flex-wrap justify-center gap-8 text-lg md:text-sm font-bold tracking-[0.2em] uppercase z-10">
        <button onClick={() => setPage('accueil')} className={`transition-all duration-300 py-2 ${page === 'accueil' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Accueil</button>
        <button onClick={() => setPage('apropos')} className={`transition-all duration-300 py-2 ${page === 'apropos' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>À Propos</button>
        <button onClick={() => setPage('avions')} className={`transition-all duration-300 py-2 ${page === 'avions' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Le Hangar</button>
        <button onClick={() => setPage('inscription')} className={`transition-all duration-300 py-2 ${page === 'inscription' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>S'inscrire</button>
        <button onClick={() => setPage('calendrier')} className={`transition-all duration-300 py-2 ${page === 'calendrier' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Calendrier</button>
        <button onClick={() => setPage('contact')} className={`transition-all duration-300 py-2 ${page === 'contact' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-300'}`}>Contacts</button>
      </nav>

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
              <p className="mt-4 text-blue-100 opacity-60 italic">Une passion partagée sur notre terrain de Bouglainval</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="glass-card p-8 space-y-4 border-t-2 border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-300 uppercase tracking-tighter">Notre Histoire</h3>
                <p className="text-sm opacity-80 leading-relaxed">Depuis plus de 20 ans, l'Avia Sport Modèle Club rassemble les passionnés d'aéromodélisme. Notre club est un lieu d'échange technique et de convivialité.</p>
              </div>
              <div className="glass-card p-8 space-y-4 border-t-2 border-green-500/30">
                <h3 className="text-xl font-bold text-green-300 uppercase tracking-tighter">Le Terrain</h3>
                <p className="text-sm opacity-80 leading-relaxed">Notre plateforme à Bouglainval offre un espace de vol dégagé, idéal pour toutes les catégories de modèles, du planeur au moteur thermique.</p>
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
              {/* CESSNA */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20"><img src="/cessna172.jpg" alt="Cessna 172" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Cessna"} /></div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Cessna 172</h3><span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase">Electrique</span></div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p><p className="font-mono">1400 mm</p></div>
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p><p className="font-mono">4534</p></div>
                  </div>
                </div>
              </div>
              {/* EXTRA */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20"><img src="/extra330.jpg" alt="Extra 330" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Extra"} /></div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Extra 330</h3><span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase">Thermique</span></div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p><p className="font-mono">1600 mm</p></div>
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p><p className="font-mono">OS45</p></div>
                  </div>
                </div>
              </div>
              {/* CORSAIR */}
              <div className="glass-card overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden bg-black/20"><img src="/corsair2.jpg" alt="Corsair F4-U" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Corsair"} /></div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center"><h3 className="text-xl font-bold tracking-wider uppercase text-blue-300">Corsair F4-U</h3><span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase">Electrique</span></div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/5 pt-4 opacity-80">
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Envergure</p><p className="font-mono">1400 mm</p></div>
                    <div><p className="text-[10px] uppercase tracking-tighter opacity-50">Moteur</p><p className="font-mono">5544</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE S'INSCRIRE (VERSION MISE À JOUR AVEC FORMULAIRE) --- */}
        {page === 'inscription' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-blue-400">Rejoindre l'ASMC</h2>
              <p className="mt-4 text-blue-100 opacity-60 italic">Remplissez votre fiche d'adhésion en ligne</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* COLONNE GAUCHE : FORMULAIRE */}
              <div className="glass-card p-8 border-t-2 border-blue-400/30">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Nom</label>
                      <input required name="nom" value={formData.nom} onChange={handleInputChange} type="text" className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-blue-400 outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Prénom</label>
                      <input required name="prenom" value={formData.prenom} onChange={handleInputChange} type="text" className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-blue-400 outline-none transition-colors" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Email</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-blue-400 outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Téléphone</label>
                      <input required name="telephone" value={formData.telephone} onChange={handleInputChange} type="tel" className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-blue-400 outline-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Adresse postale</label>
                    <input name="adresse" value={formData.adresse} onChange={handleInputChange} type="text" className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-blue-400 outline-none" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Code Postal</label>
                      <input name="cp" value={formData.cp} onChange={handleInputChange} type="text" className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-blue-400 outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Ville</label>
                      <input name="ville" value={formData.ville} onChange={handleInputChange} type="text" className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-blue-400 outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1 text-blue-300">N° Licence FFAM</label>
                      <input name="numLicence" value={formData.numLicence} onChange={handleInputChange} type="text" placeholder="Si déjà licencié" className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1 text-blue-300">N° Exploitant (AlphaTango)</label>
                      <input name="numTelepilote" value={formData.numTelepilote} onChange={handleInputChange} type="text" placeholder="FRA-..." className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-blue-500 hover:bg-blue-400 text-white font-black py-4 rounded-xl transition-all shadow-lg mt-6 uppercase tracking-widest">
                    Envoyer ma demande d'adhésion
                  </button>
                </form>
              </div>

              {/* COLONNE DROITE : TARIFS & PDF */}
              <div className="space-y-6">
                <div className="glass-card p-6 border-t-2 border-yellow-400/30 space-y-4">
                  <h3 className="text-xl font-bold text-yellow-300 uppercase tracking-widest">Cotisations 2026</h3>
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <a href="/tarifs-2026.jpg" target="_blank" rel="noopener noreferrer">
                      <img src="/tarifs-2026.jpg" alt="Tableau des tarifs" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" onError={(e) => e.target.src="https://via.placeholder.com/600x400/1e293b/60a5fa?text=Tableau+des+Tarifs"} />
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
              {/* EVENEMENT 1 */}
              <div className="glass-card p-6 flex flex-col items-stretch gap-6 hover:border-blue-400/30 transition-colors">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-500/20 rounded-2xl border border-blue-400/30 flex flex-col items-center justify-center">
                    <span className="text-xs uppercase tracking-tighter opacity-60 text-blue-100">Juillet</span>
                    <span className="text-3xl font-black text-blue-400">10</span>
                  </div>
                  <div className="flex-grow text-center md:text-left space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="text-xl font-bold uppercase tracking-wide text-white">Fête du Club</h3>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase w-fit mx-auto md:mx-0">Annuel</span>
                    </div>
                    <p className="text-sm opacity-70">Vols de découverte, démonstrations et convivialité au terrain.</p>
                    <button onClick={() => setExpandedEvent(expandedEvent === 'fete' ? null : 'fete')} className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mt-2">{expandedEvent === 'fete' ? '▲ Réduire' : '▼ En savoir plus...'}</button>
                  </div>
                  <div className="flex-shrink-0 w-24 h-24"><a href="/avion-ecole.jpg" target="_blank"><img src="/avion-ecole.jpg" className="w-full h-full object-cover rounded-xl" /></a></div>
                </div>
                {expandedEvent === 'fete' && (
                  <div className="mt-4 p-6 rounded-xl bg-white/5 border-t border-white/10 animate-in slide-in-from-top-4 duration-300">
                    <p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">Barbecue géant le midi, vols de démo et baptêmes en double commande.</p>
                  </div>
                )}
              </div>
              {/* EVENEMENT 2 */}
              <div className="glass-card p-6 flex flex-col items-stretch gap-6 hover:border-blue-400/30 transition-colors">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-500/20 rounded-2xl border border-blue-400/30 flex flex-col items-center justify-center">
                    <span className="text-xs uppercase tracking-tighter opacity-60 text-blue-100">Août</span>
                    <span className="text-3xl font-black text-blue-400">22-24</span>
                  </div>
                  <div className="flex-grow text-center md:text-left space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="text-xl font-bold uppercase tracking-wide text-white">Rencontre GPR</h3>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30 uppercase w-fit mx-auto md:mx-0">Exceptionnel</span>
                    </div>
                    <p className="text-sm opacity-70">Rencontre Grand Planeurs Radiocommandés. Restauration sur place.</p>
                    <button onClick={() => setExpandedEvent(expandedEvent === 'gpr' ? null : 'gpr')} className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mt-2">{expandedEvent === 'gpr' ? '▲ Réduire' : '▼ En savoir plus...'}</button>
                  </div>
                  <div className="flex-shrink-0 w-24 h-24"><a href="/gpr.png" target="_blank"><img src="/gpr.png" className="w-full h-full object-cover rounded-xl" /></a></div>
                </div>
                {expandedEvent === 'gpr' && (
                  <div className="mt-4 p-6 rounded-xl bg-white/5 border-t border-white/10 animate-in slide-in-from-top-4 duration-300">
                    <p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">Rencontre nationale GPR. Remorquage assuré et camping sur place.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE CONTACT --- */}
        {page === 'contact' && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-center text-3xl md:text-5xl font-black uppercase text-blue-400 mb-12">Nous Contacter</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card p-8 border-t-2 border-blue-400/30">
                <h3 className="text-xl font-bold text-blue-300 uppercase mb-6">Bureau</h3>
                <p>Président : Jean François Albert</p>
                <p>Secrétaire : Alain Lernould</p>
                <p className="mt-4 opacity-70 italic text-sm">asmc.bouglainval@gmail.com</p>
              </div>
              <div className="glass-card p-8 border-t-2 border-green-500/30 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-green-300 uppercase">Localisation</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.231904423405!2d1.600311315664!3d48.544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3f898a3c8a9a1%3A0x40b82c3688c9460!2sBouglainval!5e0!3m2!1sfr!2sfr!4v1707480000000!5m2!1sfr!2sfr&z=13" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale-[20%] contrast-[1.1] opacity-90 group-hover:opacity-100 transition-opacity"></iframe>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=48.544,1.6025" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-blue-500/10 border border-blue-400/30 text-blue-300 font-bold uppercase text-sm">📍 Itinéraire vers le terrain</a>
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