import React, { useState } from 'react';

function Attivita() {
  const [attivita, setAttivita] = useState([
    { id: 1, testo: 'Fare la spesa', completata: false },
    { id: 2, testo: 'Portare fuori il cane', completata: false },
    { id: 3, testo: 'Studiare React', completata: false }
  ]);

  const completaAttivita = (id) => {
    const nuoveAttivita = attivita.map(attivita => {
      if (attivita.id === id) {
        return {...attivita, completata: !attivita.completata};
      }
      return attivita;
    });
    setAttivita(nuoveAttivita);
  };

  return (
    <div>
      <h2>Lista Attività</h2>
      <ul>
        {attivita.map((attivita) => (
          <li
            key={attivita.id}
            style={{ textDecoration: attivita.completata ? 'line-through' : 'none' }}
            onClick={() => completaAttivita(attivita.id)}
          >
            {attivita.testo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attivita;
