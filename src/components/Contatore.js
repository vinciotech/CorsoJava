import { useState } from "react" ;
export default function Contatore() {
    const [conteggio, setConteggio] = useState(1);

    return (
      <div>
        <div class="App-header"><p>Hai cliccato {conteggio} volte</p></div>
        <button onClick={() => setConteggio(conteggio + 1)}>Clicca qui 1</button> 
      </div>
    );
  }