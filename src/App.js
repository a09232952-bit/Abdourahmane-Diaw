import React from 'react';
import Presentation from './composants/presentation';
import Header from './composants/header';
import Realisations from './composants/realisations';
import Parcours from './composants/parcour';
import Niveau from './composants/niveau';
import Footer from './composants/footer';
import './style/style.css';
import './style/style1.css';
import './style/style2.css';
import './style/style3.css';
import './style/style4.css';

const menuItems = [
  { id: 'presentation', label: 'Présentation' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'Niveau', label: 'Niveau' },
  { id: 'realisations', label: 'Réalisations' },
];

function App() {
  const donneesPresentation = {
  nom: "Abdourahmane Diaw",
  titre: "Développeur Full Stack",
  sousTitre: "Empereur des algorithmes",
  description: "Je m’appelle Abdourahmane Diaw, né le 25 août 2004 à Thies, et je suis étudiant en ingénierie informatique à l’Université Assane Seck de Ziguinchor, au Sénégal. Développeur Full Stack, je conçois et gère à la fois l’interface utilisateur et la logique serveur d’applications web. Passionné par tous les domaines de l’informatique, je me projette particulièrement dans la cybersécurité, avec pour vision de devenir un professionnel capable d’innover et de sécuriser les systèmes numériques.",}
  const projects = [ ];
  return (
    <div>
      <Header menuItems={menuItems} />
      <Presentation {...donneesPresentation} />
      <Parcours/>
      <Niveau />
      <Realisations projects={projects} />
      <Footer
        phone="+221 78 421 61 78"
        whatsapp="+221 78 421 61 78"
        email="a09232952@gmail.com"
      />
    </div>
    
  );
}

export default App;
