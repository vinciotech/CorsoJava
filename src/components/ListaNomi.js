export default function ListaNomi({ nomi }) {
    return (
      <ul>
        {nomi.map((nome) => <li key={nome}>{nome}</li>)}
      </ul>
    );
  }
  
  