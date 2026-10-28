function InfosPersonnelles({ nom, titre, email, telephone, ville }) {
  return (
    <header className="infos">
      <h1>{nom}</h1>
      <h2>{titre}</h2>
      <ul>
        <li>📧 {email}</li>
        <li>📞 {telephone}</li>
        <li>📍 {ville}</li>
      </ul>
    </header>
  );
}

export default InfosPersonnelles;