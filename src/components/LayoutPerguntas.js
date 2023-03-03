import styled from "styled-components"
import Card from "./Card"

export default function LayoutPerguntas ({cards, alteraContagem, 
                                        arrayImagensRespostas, setArrayImagensRespostas,
                                         arrayImagens, trocaTela}){

    return (
        <Layout>
            {cards.map((m,indice) => <Card key={indice} 
                                          numero={indice+1}
                                          pergunta={m.question}
                                          resposta={m.answer} 
                                          alteraContagem = {alteraContagem}
                                          arrayImagensRespostas={arrayImagensRespostas}
                                          setArrayImagensRespostas={setArrayImagensRespostas}
                                          arrayImagens={arrayImagens}
                                          trocaTela={trocaTela}
                                         />)}
        </Layout>
    )
}

const Layout = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    margin-bottom: 90px;
`