import { useState } from "react";
import styled from "styled-components";
import play from "../assets/seta_play.png"
import vira from "../assets/seta_virar.png"



export default function Card(props) {

    const [botaoPlay, setBotaoPlay] = useState(false)

    function viraCarta() {
        setBotaoPlay(true)
    }

    return (

        <>
            <CardInicio botaoInicio={botaoPlay}>
                <p> Pergunta {props.numero}</p>
                <img onClick={viraCarta} src={play} alt={play}></img>
            </CardInicio>

            <Formatacao> 
                <CardPergunta botaoInicio={botaoPlay}>
                    <p> {props.pergunta} </p>
                    <ImagemVira>
                        <img src={vira} alt={vira}></img>
                    </ImagemVira>
                </CardPergunta>
            </Formatacao>

           
        </>


    );
}

const CardInicio = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 65px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    display: ${props => props.botaoInicio ? "none" : ""} ;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
    }
`

const Formatacao = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const CardPergunta = styled.div`
    width: 299px;
    height: 131px;

    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: ${props => props.botaoInicio ? "" : "none"};

    margin-bottom: 25px;

   

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;

        padding: 15px;

        margin-bottom: 45px;

    }

`
const ImagemVira = styled.div`

        width: 100%;
        height: 20px;

        display: flex;
        justify-content: flex-end;

        margin-right: 20px;

        img{
            width: 30px;
            margin-right: 10px;
        }

        margin-bottom: 10px;  
     
`
