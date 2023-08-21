import React, { useState } from 'react';



function Inscription() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [numero, setNumero] = useState('');
    const [adresse, setAdresse] = useState('');
    const [genre, setGenre] = useState('');
    const [age, setAge] = useState('');

    
  const handleInscription = () => {
    // Ici, on met la logique pour traiter les données d'inscription
    console.log('Données d\'inscription :', { nom, prenom, numero, adresse, genre, age });
  };

  return (
    <div className="inscription-container">
      <h2>Inscription</h2>
      <div className="inscription-form">
        <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
        <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        <input type="text" placeholder="Numéro de téléphone" value={numero} onChange={(e) => setNumero(e.target.value)} />
        <input type="text" placeholder="Adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Genre</option>
          <option value="femme">Femme</option>
          <option value="homme">Homme</option>
        </select>
        <input type="number" placeholder="Âge" value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={handleInscription}>S'inscrire</button>
      </div>
    </div>
  );
}

export default Inscription;