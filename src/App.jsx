import InfosPersonnelles from "./components/InfosPersonnelles";
import Competences from "./components/Competences";
import Experience from "./components/Experience2";
import "./App.css";

const infos = {
  nom: "Amidou BA",
  titre: "Développeur Web",
  email: "amidouba624@gmail.com",
  telephone: "+221 77 768 96 99",
  ville: "Dakar, Sénégal",
};

const competences = ["HTML", "CSS", "JavaScript", "React Js", "Git/Github", "Vite"];

const postes = [
  {
    intitule: "Développeur Front-end",
    entreprise: "Entreprise A",
    periode: "2024 – Présent",
    description: "Développement d'interfaces web avec React.",
  },
  {
    intitule: "Stagiaire développeur",
    entreprise: "Entreprise B",
    periode: "2023 – 2024",
    description: "Intégration de maquettes et corrections de bugs.",
  },
];

function App() {
  return (
    <main className="cv">
      <InfosPersonnelles {...infos} />
      <Competences liste={competences} />
      <Experience postes={postes} />
    </main>
  );
}

export default App;