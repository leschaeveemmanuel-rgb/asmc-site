import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Cadre de la bannière (vide pour ton image) */}
      <div className="glass-card w-full max-w-6xl h-64 mb-8 overflow-hidden">
        <img 
          src="/images/ton-bandeau.jpg" 
          alt="Bandeau ASMC" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Cadre du texte de bienvenue centré */}
      <div className="glass-card w-full max-w-6xl p-12 flex items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Soyez les bienvenus dans l'univers de l'Avia Sport Modèle Club de Bouglainval.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Ici, nous allons vous présenter notre passion pour les modèles réduits d'avions,
            en toute simplicité et avec humilité.
            <br /><br />
            Bonne visite !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;