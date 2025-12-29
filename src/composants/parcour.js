// src/components/Parcours.jsx
import React, { useState } from 'react';

const Parcours = () => {
  const [competencesVisibles, setCompetencesVisibles] = useState({});
  const [projetsVisibles, setProjetsVisibles] = useState(false);
  const [modulesVisibles, setModulesVisibles] = useState({});

  const parcoursAcademique = [
    {
      annee: "2023",
      titre: "Baccalauréat Scientifique S2",
      institution: "Lycée de Mboro",
      lieu: "Mboro, Sénégal",
      description: "Obtention du Baccalauréat scientifique avec mention, spécialité Sciences Physiques. Cette formation m'a donné une solide base scientifique essentielle pour mes études en informatique.",
      competences: [
        "Mathématiques approfondies",
        "Physique-Chimie",
        "Sciences de la Vie et de la Terre",
        "Philosophie et raisonnement",
        "Méthodologie scientifique"
      ],
      modules: [
        { nom: "Mathématiques", etat: "Validé"},
        { nom: "Physique-Chimie", etat: "Validé"},
        { nom: "Sciences de la Vie et de la terre", etat: "Validé"},
        { nom: "Philosophie", etat: "Validé"}
      ],
      diplome: "Bac S2 - Mention",
      icone: "🏫",
      couleur: "#10b981"
    },
    {
      annee: "2023 - Présent",
      titre: "Licence en Ingénierie Informatique",
      institution: "Université Assane Seck de Ziguinchor",
      lieu: "Ziguinchor, Sénégal",
      description: "Formation approfondie en ingénierie informatique avec spécialisation en développement logiciel et systèmes d'information. Actuellement en parcours pour obtenir ma licence.",
      competences: [
        "Architecture des ordinateurs",
        "Algorithmique et programmation (C)",
        "Théorie des graphes",
        "Développement web statique (HTML/CSS)",
        "Développement web (HTML/CSS/JavaScript/PHP)",
        "Réseaux informatiques",
        "Programmation PHP",
        "Bases de données",
        "Gestion de projet",
        "Java et JavaScript",
        "Administration système (LINUX)",
        "Administration de bases de données (SQL)",
        "Réseaux locaux et services réseaux"
      ],
      modules: [
        { nom: "Algorithmique", etat: "Validé"},
        { nom: "Architecture Ordinateurs", etat: "Validé"},
        { nom: "Développement Web", etat: "Validé"},
        { nom: "Bases de Données", etat: "En cours"},
        { nom: "Réseaux Informatiques", etat: "En cours"}
      ],
      diplome: "Licence en cours",
      icone: "🎓",
      couleur: "#2563eb"
    }
  ];

  const projetsAcademiques = [
    {
      "titre": "Site Gestion Cours",
      "description": "Développement d'un site web pour organiser et consulter les cours, TD, TP, devoirs et examens",
      "technologies": ["HTML5", "CSS3", "Responsive Design"],
      "annee": "2024",
      "statut": "Terminé"
    },
    {
      "titre": "Gestionnaire de Tâches",
      "description": "Développement d'un site web pour créer, organiser et suivre des tâches et projets personnels ou professionnels",
      "technologies": ["HTML5", "CSS3", "React", "Responsive Design"],
      "annee": "2025",
      "statut": "Terminé"
    },

    {
      titre: "Site Web Portfolio",
      description: "Développement d'un site web personnel pour présenter mes compétences et projets",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      annee: "2025",
      statut: "Terminé"
    },
    
    {
      titre: "Configuration Réseau Local",
      description: "Simulation et configuration d'un réseau local d'entreprise avec services DHCP et DNS",
      technologies: ["Cisco Packet Tracer", "TCP/IP"],
      annee: "2025",
      statut: "Terminé"
    }
  ];

  const toggleCompetences = (index) => {
    setCompetencesVisibles(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleModules = (index) => {
    setModulesVisibles(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleProjets = () => {
    setProjetsVisibles(!projetsVisibles);
  };

  return (
    <section id="parcours" className="section-parcours">
      <div className="conteneur-parcours">
        
        {/* En-tête avec trajectoire */}
        <div className="en-tete-parcours">
          <div className="badge-parcours">
            <span className="badge-icone">🎓</span>
            <span className="badge-texte">Mon Parcours Académique</span>
          </div>
          <h2 className="titre-principal">
            De <span className="texte-ville">Mboro</span> à <span className="texte-ville">Ziguinchor</span>
          </h2>
          <p className="sous-titre-parcours">
            Mon parcours d'excellence en ingénierie informatique, du Bac S2 à la licence universitaire
          </p>
        </div>

        {/* Timeline académique */}
        <div className="timeline-academique">
          {parcoursAcademique.map((etape, index) => (
            <div key={index} className="carte-etape">
              {/* En-tête de l'étape */}
              <div className="en-tete-carte-etape" style={{ backgroundColor: etape.couleur }}>
                <div className="annee-etape">{etape.annee}</div>
                <div className="diplome-etape">{etape.diplome}</div>
              </div>
              
              {/* Corps de l'étape */}
              <div className="corps-etape">
                <div className="icone-titre">
                  <span className="icone-grande">{etape.icone}</span>
                  <div>
                    <h3 className="titre-etape">{etape.titre}</h3>
                    <div className="institution-info">
                      <span className="icone-institution">🏛️</span>
                      <div>
                        <div className="nom-institution">{etape.institution}</div>
                        <div className="lieu-institution">{etape.lieu}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="description-etape">{etape.description}</p>
                
                {/* Bouton pour afficher les compétences (mobile seulement) */}
                <button 
                  className="bouton-affichage-mobile bouton-competences"
                  onClick={() => toggleCompetences(index)}
                >
                  <span className="icone-bouton">
                    {competencesVisibles[index] ? '▼' : '▶'}
                  </span>
                  <span className="texte-bouton">
                    {competencesVisibles[index] ? 'Masquer les compétences' : 'Afficher les compétences'}
                  </span>
                  <span className="badge-nombre">{etape.competences.length}</span>
                </button>
                
                {/* Compétences acquises - visible par défaut sur desktop, contrôlé par état sur mobile */}
                <div className={`section-competences1 ${competencesVisibles[index] ? 'competences-visible' : ''}`}>
                  <h4 className="titre-section-interne">
                    <span className="icone-titre-section">💪</span>
                    Compétences Développées
                  </h4>
                  <div className="grille-competences">
                    {etape.competences.map((competence, idx) => (
                      <div key={idx} className="badge-competence1">
                        <span className="icone-competence">✓</span>
                        {competence}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bouton pour afficher les modules (mobile seulement) */}
                <button 
                  className="bouton-affichage-mobile bouton-modules"
                  onClick={() => toggleModules(index)}
                >
                  <span className="icone-bouton">
                    {modulesVisibles[index] ? '▼' : '▶'}
                  </span>
                  <span className="texte-bouton">
                    {modulesVisibles[index] ? 'Masquer les modules' : 'Afficher les modules'}
                  </span>
                  <span className="badge-nombre">{etape.modules.length}</span>
                </button>
                
                {/* Modules suivis */}
                <div className={`section-modules ${modulesVisibles[index] ? 'modules-visible' : ''}`}>
                  <h4 className="titre-section-interne">
                    <span className="icone-titre-section">📚</span>
                    {etape.titre.includes("Licence") ? "Modules en cours" : "Matières principales"}
                  </h4>
                  <div className="liste-modules">
                    {etape.modules.map((module, idx) => (
                      <div key={idx} className={`carte-module etat-${module.etat.toLowerCase().replace(' ', '-')}`}>
                        <div className="en-tete-module">
                          <span className="nom-module">{module.nom}</span>
                          {module.note && <span className="note-module">{module.note}</span>}
                        </div>
                        <div className={`statut-module ${module.etat === 'Validé' ? 'valide' : 'en-cours'}`}>
                          {module.etat}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Particularités de chaque étape */}
                {etape.titre.includes("Licence") && (
                  <div className="encart-licence">
                    <div className="titre-encart">🚀 Objectifs de la Licence</div>
                    <div className="contenu-encart">
                      <div className="objectifs-liste">
                        <div className="objectif">
                          <div className="icone-objectif">🎯</div>
                          <div>
                            <div className="titre-objectif">Spécialisation Technique</div>
                            <div className="desc-objectif">Approfondir mes compétences en développement logiciel</div>
                          </div>
                        </div>
                        <div className="objectif">
                          <div className="icone-objectif">🔐</div>
                          <div>
                            <div className="titre-objectif">Cybersécurité</div>
                            <div className="desc-objectif">Acquérir des bases solides en sécurité informatique</div>
                          </div>
                        </div>
                        <div className="objectif">
                          <div className="icone-objectif">🤝</div>
                          <div>
                            <div className="titre-objectif">Projets Collaboratifs</div>
                            <div className="desc-objectif">Travailler sur des projets d'équipe complexes</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Projets académiques */}
        <div className="section-projets-academiques">
          <div className="en-tete-projets">
            <h3 className="titre-section-grande">
              <span className="icone-titre-grande">💻</span>
              Projets Académiques
            </h3>
            <p className="sous-titre-projets">
              Mise en pratique des connaissances acquises durant mon parcours
            </p>
          </div>
          
          {/* Bouton pour afficher/masquer les projets sur mobile */}
          <button 
            className="bouton-affichage-mobile bouton-projets"
            onClick={toggleProjets}
          >
            <span className="icone-bouton">
              {projetsVisibles ? '▼' : '▶'}
            </span>
            <span className="texte-bouton">
              {projetsVisibles ? 'Masquer les projets' : 'Afficher les projets'}
            </span>
            <span className="badge-nombre">{projetsAcademiques.length}</span>
          </button>
          
          {/* Grille des projets - visible par défaut sur desktop, contrôlé par état sur mobile */}
          <div className={`grille-projets ${projetsVisibles ? 'projets-visible' : ''}`}>
            {projetsAcademiques.map((projet, index) => (
              <div key={index} className="carte-projet-academique">
                <div className={`statut-projet statut-${projet.statut.toLowerCase().replace(' ', '-')}`}>
                  {projet.statut}
                </div>
                <h4 className="titre-projet">{projet.titre}</h4>
                <div className="annee-projet">{projet.annee}</div>
                <p className="description-projet">{projet.description}</p>
                <div className="technologies-projet">
                  {projet.technologies.map((tech, idx) => (
                    <span key={idx} className="badge-technologie-projet">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perspectives d'avenir */}
        <div className="section-perspectives">
          <div className="carte-perspectives">
            <div className="en-tete-perspectives">
              <span className="icone-perspectives">🚀</span>
              <h3 className="titre-perspectives">Perspectives d'Avenir</h3>
            </div>
            
            <div className="contenu-perspectives">
              <div className="objectif-futur">
                <div className="icone-objectif-futur">🎓</div>
                <div>
                  <div className="titre-objectif-futur">Terminer ma Licence</div>
                  <div className="desc-objectif-futur">Objectif : obtention de la licence en 2026 avec mention</div>
                </div>
              </div>
              
              <div className="objectif-futur">
                <div className="icone-objectif-futur">💼</div>
                <div>
                  <div className="titre-objectif-futur">Stage Professionnel</div>
                  <div className="desc-objectif-futur">Recherche d'un stage en développement web ou administration systèmes</div>
                </div>
              </div>
              
              <div className="objectif-futur">
                <div className="icone-objectif-futur">🎯</div>
                <div>
                  <div className="titre-objectif-futur">Spécialisation Master</div>
                  <div className="desc-objectif-futur">Poursuite en Master Informatique, spécialité Cybersécurité</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Citation finale */}
        <div className="citation-finale">
          <div className="conteneur-citation">
            <div className="guillemets">"</div>
            <p className="texte-citation">
              Mon parcours du Bac S2 à Mboro vers la Licence en Ingénierie Informatique à Ziguinchor 
              représente mon engagement envers l'excellence académique et ma passion grandissante 
              pour les technologies de l'information.
            </p>
            <div className="signature-citation">
              — Futur Ingénieur en Informatique
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Parcours;