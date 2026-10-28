export default Experience;
function Experience({ postes }) {
  return (
    <section>
      <h3>Expériences professionnelles</h3>
      {postes.map((poste) => (
        <article key={poste.entreprise + poste.periode} className="poste">
          <h4>{poste.intitule}</h4>
          <p className="meta">
            {poste.entreprise} · {poste.periode}
          </p>
          <p>{poste.description}</p>
        </article>
      ))}
    </section>
  );
}

