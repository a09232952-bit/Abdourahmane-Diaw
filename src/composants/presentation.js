// src/components/Presentation.jsx
import React from 'react';
const Presentation = ({ nom, description, titre, sousTitre, imageUrl }) => {
  return (
    <section id="presentation" className="section-presentation">
      <div className="conteneur-presentation">
        
        {/* Illustration décorative */}
        <div className="decoration-bleue">
          <div className="cercle-grand"></div>
          <div className="cercle-moyen"></div>
          <div className="cercle-petit"></div>
        </div>
        
        {/* Contenu principal */}
        <div className="contenu-presentation">
          
          {/* En-tête avec badge */}
          <div className="en-tete-presentation">
            <div className="badge-presentation">
              <span className="badge-texte">👋 Bienvenue</span>
            </div>
            <h2 className="titre-section">{titre || 'Présentation'}</h2>
          </div>
          
          {/* Nom avec effet spécial */}
          <div className="zone-nom">
            <h3 className="nom-principal">
              {nom.split('').map((lettre, index) => (
                <span key={index} className="lettre-animee" style={{animationDelay: `${index * 0.1}s`}}>
                  
                  {lettre === " " ? "\u00A0" : lettre}
                </span>
              ))}
            </h3>
            <div className="soulignement-nom"></div>
          </div>
          
          {/* Sous-titre */}
          {sousTitre && <p className="sous-titre">{sousTitre}</p>}
          
          {/* Description */}
          <div className="zone-description">
            <p className="description-texte">{description}</p>
          </div>
          
        </div>
        
        {/* Photo ou illustration */}
        <div className="zone-illustration">
          {imageUrl ? (
            <div className="cadre-photo">
              <img src={imageUrl} alt={nom} className="photo-profil" />
              <div className="cadre-decoration"></div>
            </div>
          ) : (
            <div className="illustration-defaut">
              <div className="avatar-placeholder">
                <span className="initials">{nom.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="elements-flottants">
                <div className="element element-1">💻</div>
                <div className="element element-2">🎨</div>
                <div className="element element-3">⚡</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Indicateur de scroll */}
        <div className="indicateur-scroll">
          <div className="scroll-texte">Scroll</div>
          <div className="scroll-ligne">
            <div className="scroll-point"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Presentation;