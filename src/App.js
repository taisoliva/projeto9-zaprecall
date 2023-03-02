
import GlobalStyle from "./style/GlobalStyles";
import Cabecalho from "./components/Cabecalho.js"
import LayoutPerguntas from "./components/LayoutPerguntas.js"
import Footer from "./components/Footer.js"


export default function App() {
  return (
    <> 
      <GlobalStyle/>
      <Cabecalho />
      <LayoutPerguntas />
      <Footer/>
      
    </>
  );
}

