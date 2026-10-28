function Competences({ liste }) {
  return (
    <section>
      <h3>Compétences</h3>
      <ul className="tags">
        {liste.map((competence) => (
          <li key={competence}>{competence}</li>
        ))}
      </ul>
    </section>
  );
}

export default Competences;