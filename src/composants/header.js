// src/components/Header.jsx
import React, { useState } from 'react';

const Header = ({ menuItems }) => {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [elementActif, setElementActif] = useState('');

  const gererClic = (id) => {
    setElementActif(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOuvert(false);
  };

  return (
    <header className="entete">
      <div className="conteneur-entete">
        {/* Logo */}
        <div className="zone-logo">
          <div className="logo-cercle">
            <span className="logo-texte">AD</span>
          </div>
          <h1 className="titre-entete">
            <span className="texte-blanc">Dev-</span>
            <span className="texte-bleu-clair">Abdou</span>
          </h1>
        </div>

        {/* Navigation Bureau */}
        <nav className="navigation-principale">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => gererClic(item.id)}
              className={`bouton-nav ${elementActif === item.id ? 'bouton-actif' : ''}`}
            >
              <span className="contenu-bouton">
                {item.label}
              </span>
              {elementActif === item.id && (
                <div className="indicateur-actif"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          onClick={() => setMenuOuvert(!menuOuvert)}
          className="bouton-menu-mobile"
          aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOuvert ? (
            <span className="icone-fermer">✕</span>
          ) : (
            <span className="icone-menu">☰</span>
          )}
        </button>
      </div>

      {/* Navigation Mobile */}
      {menuOuvert && (
        <div className="navigation-mobile">
          <div className="conteneur-mobile">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => gererClic(item.id)}
                className={`lien-mobile ${elementActif === item.id ? 'lien-mobile-actif' : ''}`}
              >
                <span className="texte-lien">{item.label}</span>
                {elementActif === item.id && (
                  <div className="point-actif"></div>
                )}
              </button>
            ))}
            
            {/* Élément décoratif */}
            <div className="separateur-mobile">
              <div className="ligne-decorative"></div>
              <span className="texte-separateur">Navigation</span>
              <div className="ligne-decorative"></div>
            </div>
          </div>
        </div>
      )}

      {/* Effets d'arrière-plan */}
      <div className="effets-fond">
        <div className="cercle-blanc"></div>
        <div className="cercle-bleu"></div>
      </div>
    </header>
  );
};

export default Header;