// src/components/Footer.jsx
import React from 'react';
const Footer = ({ phone, whatsapp, email }) => {
  const contactInfos = {
    phone: phone || "+221 78 123 45 67",
    whatsapp: whatsapp || "+221 78 123 45 67",
    email: email || "contact@exemple.com"
  };

  return (
    <footer id="contact" className="footer-contact">
      <div className="conteneur-footer">
        
        {/* En-tête du footer */}
        <div className="en-tete-footer">
          <div className="badge-contact">
            <span className="badge-icone-contact">📞</span>
            <span className="badge-texte-contact">Me Contacter</span>
          </div>
          <h2 className="titre-contact">Travaillons <span className="texte-accent">Ensemble</span></h2>
          <p className="sous-titre-contact">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration
          </p>
        </div>

        {/* Informations de contact */}
        <div className="grille-contact">
          
          {/* Téléphone */}
          <div className="carte-contact">
            <div className="icone-carte">
              <span className="emoji-contact">📱</span>
            </div>
            <h3 className="titre-carte">Téléphone</h3>
            <p className="description-carte">Disponible pour échanger par téléphone</p>
            <a href={`tel:${contactInfos.phone}`} className="lien-contact">
              <span className="texte-lien">{contactInfos.phone}</span>
              <span className="fleche-lien">↗</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="carte-contact">
            <div className="icone-carte">
              <span className="emoji-contact">💬</span>
            </div>
            <h3 className="titre-carte">WhatsApp</h3>
            <p className="description-carte">Messages instantanés pour échanges rapides</p>
            <a 
              href={`https://wa.me/qr/OQZRXEDL3HRUD1, '')}`}
              target="_blank"
              rel="noreferrer"
              className="lien-contact lien-whatsapp"
            >
              <span className="texte-lien">{contactInfos.whatsapp}</span>
              <span className="fleche-lien">↗</span>
            </a>
          </div>

          {/* Email */}
          <div className="carte-contact">
            <div className="icone-carte">
              <span className="emoji-contact">✉️</span>
            </div>
            <h3 className="titre-carte">Email</h3>
            <p className="description-carte">Pour les projets détaillés et collaborations</p>
            <a href={`mailto:${contactInfos.email}`} className="lien-contact">
              <span className="texte-lien">{contactInfos.email}</span>
              <span className="fleche-lien">↗</span>
            </a>
          </div>

        </div>

        {/* Appel à action */}
        <div className="appel-footer">
          <p className="message-footer">
            Prêt à donner vie à votre prochain projet ?
          </p>
          <div className="boutons-footer">
            <a href={`tel:${contactInfos.phone}`} className="bouton-appel">
              <span className="icone-bouton">📞</span>
              Appeler maintenant
            </a>
            <a 
              href={`https://wa.me/${contactInfos.whatsapp.replace(/\s/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="bouton-whatsapp"
            >
              <span className="icone-bouton">💬</span>
              Message WhatsApp
            </a>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="separateur-footer"></div>

        {/* Copyright */}
        <div className="bas-footer">
          <p className="copyright">
            © {new Date().getFullYear()} Tous droits réservés • Développé avec passion
          </p>
          <p className="retour-haut">
            <a 
              href="#presentation" 
              className="lien-retour"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('presentation')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ↑ Retour en haut
            </a>
          </p>
        </div>

      </div>

      {/* Éléments décoratifs */}
      <div className="decoration-footer">
        <div className="forme-footer forme-footer-1"></div>
        <div className="forme-footer forme-footer-2"></div>
      </div>
    </footer>
  );
};

export default Footer;