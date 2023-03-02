import styled from "styled-components"
import mock from "../mock"
import Card from "./Card"

console.log(mock)

export default function LayoutPerguntas (){
    return (
        <Layout>
            {mock.map((m,indice) => <Card key={indice} 
                                          numero={indice+1}
                                          pergunta={m.question}
                                          resposta={m.answer} />)}
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