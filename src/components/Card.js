import styled from "styled-components";
import play from "../assets/seta_play.png"

export default function Card(props){
    return(
        <CardPergunta>
            <p> Pergunta {props.numero}</p>
            <img src={play} alt={play}></img>
        </CardPergunta>
    );
}

const CardPergunta = styled.div `
    background-color: #FFFFFF;
    width: 300px;
    height: 65px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
    }
`