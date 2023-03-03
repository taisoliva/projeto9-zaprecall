
import GlobalStyle from "./style/GlobalStyles";
import Cabecalho from "./components/Cabecalho.js"
import LayoutPerguntas from "./components/LayoutPerguntas.js"
import Footer from "./components/Footer.js"
import mock from "./mock"
import { useState } from "react";


export default function App() {

  const cards = mock;

  const [respondido, setRespondido] = useState(0)

  function alteraContagem () {
    const contador = respondido + 1;
    setRespondido(contador)

    
  }

  console.log(cards)
  return (
    <> 
      <GlobalStyle/>
      <Cabecalho />
      <LayoutPerguntas cards={cards} alteraContagem={alteraContagem}/>
      <Footer cards={cards} respondido={respondido}/>
      
    </>
  );
}

