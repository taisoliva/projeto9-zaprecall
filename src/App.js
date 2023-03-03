
import GlobalStyle from "./style/GlobalStyles";
import Cabecalho from "./components/Cabecalho.js"
import LayoutPerguntas from "./components/LayoutPerguntas.js"
import Footer from "./components/Footer.js"
import mock from "./mock"
import { useState } from "react";
import play from "./assets/seta_play.png"
import errado from "./assets/icone_erro.png"
import certo from "./assets/icone_certo.png"
import quase from "./assets/icone_quase.png"


export default function App() {

  const cards = mock;

  const [respondido, setRespondido] = useState(0)
  const [arrayImagensRespostas, setArrayImagensRespostas] = useState([])

  const arrayImagens = [play, errado, quase, certo]

  function alteraContagem () {
    const contador = respondido + 1;
    setRespondido(contador)

    
  }

  console.log(cards)
  return (
    <> 
      <GlobalStyle/>
      <Cabecalho />
      <LayoutPerguntas 
          cards={cards} 
          alteraContagem={alteraContagem} 
          arrayImagensRespostas={arrayImagensRespostas}
          setArrayImagensRespostas={setArrayImagensRespostas}
          arrayImagens={arrayImagens}
          />
      <Footer cards={cards} respondido={respondido} arrayImagensRespostas={arrayImagensRespostas}/>
      
    </>
  );
}

