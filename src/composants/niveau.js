// src/components/Competences.jsx
import React, { useState } from 'react';

const Niveau = ({ categoriesCompetences }) => {
  const [categorieActive, setCategorieActive] = useState(0);

  // Données par défaut si non fournies
  const competences = categoriesCompetences || [
    {
      nom: "Frontend",
      icone: "💻",
      competences: [
        { nom: "React", niveau: 20, couleur: "#61DAFB" },
        { nom: "JavaScript", niveau: 30, couleur: "#F7DF1E" },
        { nom: "HTML/CSS", niveau: 65, couleur: "#E34F26" },
        
      ]
    },
    {
      nom: "Backend",
      icone: "⚙️",
      competences: [
        { nom: "PHP", niveau: 45, couleur: "#3a00f8ff" },
        { nom: "Java", niveau: 5, couleur: "#007396" },
        { nom: "SQL", niveau: 15, couleur: "#4479A1" },
        { nom: "C", niveau: 25, couleur: "#19e827ff" }
      ]
    },
    {
      nom: "Outils",
      icone: "🛠️",
      competences: [
        { nom: "Git", niveau: 10, couleur: "#F05032" },
      ]
    }
  ];

  return (
    <section id="competences" className="section-competences2">
      <div className="conteneur-competences2">
        
        {/* En-tête */}
        <div className="en-tete-competences2">
          <div className="badge-competences2">
            <span className="badge-icone2">⭐</span>
            <span className="badge-texte2">Expertise</span>
          </div>
          <h2 className="titre-principal2">Mon <span className="texte-bleu2">Niveau</span></h2>
          <p className="sous-titre-competences2">
            Un aperçu de mes compétences techniques et de mon niveau d'expertise
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="filtres-categories2">
          {competences.map((categorie, index) => (
            <button
              key={index}
              onClick={() => setCategorieActive(index)}
              className={`bouton-categorie2 ${index === categorieActive ? 'bouton-categorie-actif2' : ''}`}
            >
              <span className="icone-categorie2">{categorie.icone}</span>
              <span className="nom-categorie2">{categorie.nom}</span>
              {index === categorieActive && <div className="indicateur-categorie2"></div>}
            </button>
          ))}
        </div>

        {/* Contenu des compétences */}
        <div className="conteneur-cartes2">
          {/* Statistiques globales */}
          <div className="carte-statistiques2">
            <div className="en-tete-carte2">
              <h3 className="titre-carte2">Niveau Global</h3>
              <div className="score-global2">65%</div>
            </div>
            <div className="graphique-radial2">
              <div className="cercle-externe2">
                <div className="cercle-interne2">
                  <span className="pourcentage2">65%</span>
                </div>
              </div>
            </div>
            <div className="legende-statistiques2">
              <div className="item-legende2">
                <div className="point point-expert2"></div>
                <span>Expert</span>
              </div>
              <div className="item-legende2">
                <div className="point point-intermediaire2"></div>
                <span>Intermédiaire</span>
              </div>
              <div className="item-legende2">
                <div className="point point-debutant2"></div>
                <span>Débutant</span>
              </div>
            </div>
          </div>

          {/* Liste des compétences */}
          <div className="carte-competences2">
            <div className="en-tete-carte2">
              <div className="titre-categorie2">
                <span className="icone-categorie-active2">{competences[categorieActive].icone}</span>
                <h3 className="titre-carte2">{competences[categorieActive].nom}</h3>
              </div>
              <div className="nombre-competences2">
                {competences[categorieActive].competences.length} compétences
              </div>
            </div>
            
            <div className="liste-competences2">
              {competences[categorieActive].competences.map((competence, index) => (
                <div key={index} className="item-competence2">
                  <div className="info-competence2">
                    <div className="nom-niveau2">
                      <span className="nom-competence2">{competence.nom}</span>
                      <span className="niveau-pourcentage2">{competence.niveau}%</span>
                    </div>
                    {/* Barre de progression */}
                    <div className="conteneur-barre2">
                      <div 
                        className="barre-progression2"
                        style={{ 
                          width: `${competence.niveau}%`,
                          backgroundColor: competence.couleur 
                        }}
                      >
                        <div className="effet-lumiere2"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Détails supplémentaires */}
                  <div className="details-competence2">
                    <div className="niveau-texte2">
                      <span className={`label-niveau2 ${competence.niveau >= 90 ? 'expert' : competence.niveau >= 70 ? 'intermediaire' : 'debutant'}`}>
                        {competence.niveau >= 90 ? 'Expert' : competence.niveau >= 70 ? 'Intermédiaire' : 'Débutant'}
                      </span>
                    </div>
                    <div className="projets-compteur2">
                      <span className="nombre-projets2">+{Math.floor(competence.niveau / 10) + 3} projets</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Note globale de la catégorie */}
            <div className="note-categorie2">
              <div className="moyenne-categorie2">
                <span className="label-moyenne2">Moyenne {competences[categorieActive].nom} :</span>
                <span className="valeur-moyenne2">
                  {Math.round(
                    competences[categorieActive].competences.reduce((acc, comp) => acc + comp.niveau, 0) / 
                    competences[categorieActive].competences.length
                  )}%
                </span>
              </div>
              <div className="etoiles-categorie2">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`etoile2 ${i < Math.floor(competences[categorieActive].competences.reduce((acc, comp) => acc + comp.niveau, 0) / competences[categorieActive].competences.length / 20) ? 'pleine' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies fréquemment utilisées */}
        <div className="section-technologies2">
          <h3 className="titre-technologies2">Technologies fréquemment utilisées</h3>
          <div className="liste-technologies2">
            {competences.flatMap(cat => cat.competences).slice(0, 8).map((tech, index) => (
              <div 
                key={index} 
                className="badge-technologie2"
                style={{ borderColor: tech.couleur }}
              >
                <span 
                  className="point-couleur2"
                  style={{ backgroundColor: tech.couleur }}
                ></span>
                <span className="nom-technologie2">{tech.nom}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Éléments décoratifs */}
      <div className="decoration-competences2">
        <div className="forme forme-12"></div>
        <div className="forme forme-22"></div>
        <div className="forme forme-32"></div>
      </div>
    </section>
  );
};

export default Niveau;