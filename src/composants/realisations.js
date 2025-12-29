// src/components/Realisations.jsx
import React, { useState } from 'react';

const Realisations = ({ projets }) => {
  const [categorieActive, setCategorieActive] = useState('tous');
  const [projetSelectionne, setProjetSelectionne] = useState(null);
  const [detailsVisibles, setDetailsVisibles] = useState(false);
  const [filtresVisibles, setFiltresVisibles] = useState(false);
  const [projetsVisibles, setProjetsVisibles] = useState(false);

  // Données par défaut si non fournies
  const projetsAfficher = projets || [
    {
      id: 1,
      titre: "Portfolio Personnel",
      description: "Site web personnel présentant mes compétences, réalisations et parcours académique",
      categorie: "web",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      lien: "#",
      annee: 2025,
      statut: "terminé",
      details: "Développement d'un portfolio moderne avec design responsive, animations fluides et sections interactives."
    },

    {
      id: 2,
      titre: "TaskFlow - Gestionnaire de Tâches",
      description: "Application web intuitive pour la gestion et l'organisation des tâches quotidiennes",
      categorie: "web",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
      lien: "https://a09232952-bit.github.io/gestionnaire-de-taches/",
      annee: 2025,
      statut: "en cours",
      details: "Développement d'un gestionnaire de tâches avec fonctionnalités de drag & drop, catégories personnalisables, rappels, et synchronisation locale. Interface moderne avec mode sombre/clair."
    },
  ];

  // Catégories uniques
  const categories = ['tous', ...new Set(projetsAfficher.map(p => p.categorie))];

  // Filtrer les projets
  const projetsFiltres = categorieActive === 'tous' 
    ? projetsAfficher 
    : projetsAfficher.filter(projet => projet.categorie === categorieActive);

  // Ouvre la modale de détail
  const ouvrirDetails = (projet) => {
    setProjetSelectionne(projet);
  };

  // Ferme la modale
  const fermerDetails = () => {
    setProjetSelectionne(null);
  };

  // Toggle affichage détails projet
  const toggleDetails = () => {
    setDetailsVisibles(!detailsVisibles);
  };

  // Toggle affichage filtres
  const toggleFiltres = () => {
    setFiltresVisibles(!filtresVisibles);
  };

  // Toggle affichage projets
  const toggleProjets = () => {
    setProjetsVisibles(!projetsVisibles);
  };

  return (
    <section id="realisations" className="section-realisations">
      <div className="conteneur-realisations">
        
        {/* En-tête */}
        <div className="en-tete-realisations">
          <div className="badge-realisations">
            <span className="badge-icone">🚀</span>
            <span className="badge-texte">Portfolio</span>
          </div>
          <h2 className="titre-principal">Mes <span className="texte-bleu">Réalisations</span></h2>
          <p className="sous-titre-realisations">
            Découvrez une sélection de mes projets les plus significatifs
          </p>
        </div>

        {/* Statistiques - bouton d'affichage mobile */}
        <button 
          className="bouton-affichage-mobile bouton-statistiques"
          onClick={toggleDetails}
        >
          <span className="icone-bouton">
            {detailsVisibles ? '▼' : '▶'}
          </span>
          <span className="texte-bouton">
            {detailsVisibles ? 'Masquer les statistiques' : 'Afficher les statistiques'}
          </span>
          <span className="badge-nombre">4</span>
        </button>

        {/* Statistiques - visible par défaut sur desktop */}
        <div className={`statistiques-realisations ${detailsVisibles ? 'statistiques-visible' : ''}`}>
          <div className="carte-stat">
            <div className="valeur-stat">{projetsAfficher.length}+</div>
            <div className="label-stat">Projets réalisés</div>
          </div>
          <div className="carte-stat">
            <div className="valeur-stat">95%</div>
            <div className="label-stat">Satisfaction</div>
          </div>
          <div className="carte-stat">
            <div className="valeur-stat">{projetsAfficher.flatMap(p => p.technologies).filter((v, i, a) => a.indexOf(v) === i).length}</div>
            <div className="label-stat">Technologies</div>
          </div>
          <div className="carte-stat">
            <div className="valeur-stat">2</div>
            <div className="label-stat">Années d'expérience</div>
          </div>
        </div>

        {/* Bouton pour afficher les filtres sur mobile */}
        <button 
          className="bouton-affichage-mobile bouton-filtres-toggle"
          onClick={toggleFiltres}
        >
          <span className="icone-bouton">
            {filtresVisibles ? '▼' : '▶'}
          </span>
          <span className="texte-bouton">
            {filtresVisibles ? 'Masquer les filtres' : 'Afficher les filtres'}
          </span>
          <span className="badge-nombre">{categories.length}</span>
        </button>

        {/* Filtres - visible par défaut sur desktop */}
        <div className={`filtres-categories ${filtresVisibles ? 'filtres-visible' : ''}`}>
          {categories.map((categorie, index) => (
            <button
              key={index}
              onClick={() => setCategorieActive(categorie)}
              className={`bouton-filtre ${categorie === categorieActive ? 'bouton-filtre-actif' : ''}`}
            >
              <span className="icone-filtre">
                {categorie === 'web' ? '🌐' : 
                 categorie === 'mobile' ? '📱' : 
                 categorie === 'backend' ? '⚙️' : 
                 categorie === 'tous' ? '✨' : '🎨'}
              </span>
              <span className="texte-filtre">
                {categorie === 'tous' ? 'Tous les projets' : 
                 categorie === 'web' ? 'Développement Web' :
                 categorie === 'mobile' ? 'Applications Mobile' :
                 categorie === 'backend' ? 'Backend & API' : categorie}
              </span>
            </button>
          ))}
        </div>

        {/* Bouton pour afficher les projets sur mobile */}
        <button 
          className="bouton-projets-toggle"
          onClick={toggleProjets}
        >
          <span className="icone-bouton">
            {projetsVisibles ? '▼' : '▶'}
          </span>
          <span className="texte-bouton">
            {projetsVisibles ? 'Masquer les projets' : 'Afficher les projets'}
          </span>
          <span className="badge-nombre">{projetsFiltres.length}</span>
        </button>

        {/* Grille des projets */}
        {projetsFiltres.length === 0 ? (
          <div className={`aucune-realisation ${projetsVisibles ? 'projets-visible' : ''}`}>
            <div className="icone-aucun">📂</div>
            <h3>Aucune réalisation trouvée</h3>
            <p>Il n'y a pas de projets dans cette catégorie pour le moment.</p>
          </div>
        ) : (
          <div className={`grille-projets ${projetsVisibles ? 'projets-visible' : ''}`}>
            {projetsFiltres.map((projet) => (
              <div 
                key={projet.id} 
                className="carte-projet"
                onClick={() => ouvrirDetails(projet)}
              >
                {/* Badge statut */}
                <div className={`badge-statut badge-statut-${projet.statut.toLowerCase().replace(' ', '-')}`}>
                  {projet.statut}
                </div>

                {/* Image du projet */}
                <div className="image-projet">
                  <div 
                    className="image-contenu"
                    style={{ backgroundImage: `url(${projet.image})` }}
                  ></div>
                  <div className="overlay-projet">
                    <span className="texte-overlay">Voir les détails</span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="contenu-projet">
                  <div className="en-tete-projet">
                    <h3 className="titre-projet">{projet.titre}</h3>
                    <span className="annee-projet">{projet.annee}</span>
                  </div>
                  
                  <p className="description-projet">{projet.description}</p>
                  
                  {/* Technologies */}
                  <div className="technologies-projet">
                    {projet.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="badge-technologie">
                        {tech}
                      </span>
                    ))}
                    {projet.technologies.length > 3 && (
                      <span className="badge-plus">+{projet.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  {/* Actions */}
                  <div className="actions-projet">
                    <button 
                      className="bouton-details"
                      onClick={(e) => {
                        e.stopPropagation();
                        ouvrirDetails(projet);
                      }}
                    >
                      <span className="icone-details">🔍</span>
                      Détails
                    </button>
                    
                    {projet.lien && (
                      <a 
                        href={projet.lien} 
                        className="bouton-visiter"
                        target="_blank" 
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="icone-visiter">↗</span>
                        Visiter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modale de détail */}
      {projetSelectionne && (
        <div className="modale-overlay" onClick={fermerDetails}>
          <div className="modale-contenu" onClick={(e) => e.stopPropagation()}>
            <button className="bouton-fermer" onClick={fermerDetails}>
              ✕
            </button>
            
            <div className="modale-corps">
              {/* Image en-tête */}
              <div 
                className="modale-image"
                style={{ backgroundImage: `url(${projetSelectionne.image})` }}
              ></div>
              
              {/* Contenu */}
              <div className="modale-infos">
                <div className="modale-en-tete">
                  <div>
                    <h2 className="modale-titre">{projetSelectionne.titre}</h2>
                    <div className="modale-metas">
                      <span className="modale-annee">Année : {projetSelectionne.annee}</span>
                      <span className={`modale-statut modale-statut-${projetSelectionne.statut.toLowerCase().replace(' ', '-')}`}>
                        {projetSelectionne.statut}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="modale-description">
                  <h3>Description du projet</h3>
                  <p>{projetSelectionne.details || projetSelectionne.description}</p>
                </div>
                
                <div className="modale-technologies">
                  <h3>Technologies utilisées</h3>
                  <div className="liste-technologies-modale">
                    {projetSelectionne.technologies.map((tech, index) => (
                      <span key={index} className="badge-technologie-modale">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="modale-challenges">
                  <h3>Défis relevés</h3>
                  <ul className="liste-challenges">
                    <li>Optimisation des performances</li>
                    <li>Interface utilisateur intuitive</li>
                    <li>Design responsive et accessible</li>
                    {projetSelectionne.titre.includes("Portfolio") && (
                      <li>Intégration des différentes sections de manière cohérente</li>
                    )}
                  </ul>
                </div>
                
                <div className="modale-actions">
                  {projetSelectionne.lien && (
                    <a 
                      href={projetSelectionne.lien} 
                      className="bouton-modale-principal"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <span className="icone-lien">🌐</span>
                      Visiter le projet
                    </a>
                  )}
                  <button 
                    className="bouton-modale-secondaire"
                    onClick={fermerDetails}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Éléments décoratifs */}
      <div className="decoration-realisations">
        <div className="forme forme-1"></div>
        <div className="forme forme-2"></div>
        <div className="forme forme-3"></div>
      </div>
    </section>
  );
};

export default Realisations;