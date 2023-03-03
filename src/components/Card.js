import { useState } from "react";
import styled from "styled-components";
import vira from "../assets/seta_virar.png"

export default function Card(props) {

    const {numero, pergunta, 
        resposta, alteraContagem, 
        arrayImagensRespostas, setArrayImagensRespostas, arrayImagens} = props

    const [botaoPlay, setBotaoPlay] = useState(false)
    const [botaoVira, setBotaoVira] = useState(false)
    const [paragrafo, setParagrafo] = useState(pergunta)
    const [cor,setCor] = useState("#333333")
    const [imagem, setImagem] = useState(arrayImagens[0])

    const arrayAuxiliar = [...arrayImagensRespostas]


    return (

        <>
            <CardInicio data-test="flashcard" botaoInicio={botaoPlay} cor={cor}>
                <p data-test="flashcard-text"> Pergunta {numero}</p>
               <img data-test="play-btn" onClick={() => { imagem === arrayImagens[0] && setBotaoPlay(true)}} src={imagem} alt={imagem}></img>
            </CardInicio>


            <CardPergunta data-test="flashcard" botaoInicio={botaoPlay} >
                <p data-test="flashcard-text"> {paragrafo} </p>
                <ImagemVira botaoVira={botaoVira}>
                    <img data-test="turn-btn"  onClick={() => {
                        setBotaoVira(true)
                        setParagrafo(resposta)
                    }} src={vira} alt={vira}></img>
                </ImagemVira>

                <FormatacaoBotoes botaoVira={botaoVira} >

                    <button  data-test="no-btn" onClick={() => {setBotaoPlay(false)
                                            setParagrafo(pergunta)
                                            setBotaoVira(false)
                                            setCor("#FF3030")
                                            setImagem(arrayImagens[1])
                                            alteraContagem()
                                            arrayAuxiliar.push(arrayImagens[1])
                                            }}> 
                                    Não lembrei </button>

                    <button  data-test="partial-btn" onClick={() => {setBotaoPlay(false)
                                           setParagrafo(pergunta)
                                           setBotaoVira(false)
                                           setCor("#FF922E")
                                           setImagem(arrayImagens[2])
                                           alteraContagem()}
                                           }> Quase não lembrei </button>
                    
                    <button data-test="zap-btn" onClick={() => {setBotaoPlay(false)
                                           setParagrafo(pergunta)
                                           setBotaoVira(false)
                                           setCor("#2FBE34")
                                           setImagem(arrayImagens[3])
                                           alteraContagem()}} > Zap! </button>


                </FormatacaoBotoes>
            </CardPergunta>



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

        text-decoration: ${props=>props.cor !== "#333333" && "line-through"};

        color: ${props=>props.cor};

        
    }
`



const CardPergunta = styled.div`
    width: 300px;
    height: 170px;

    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: ${props => props.botaoInicio ? "" : "none"};

    margin-bottom: 25px;

    position: relative;

   

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;

        padding: 15px;

        

    }

`
const ImagemVira = styled.div`

        width: 100%;
        height: 20px;

        display: ${props => props.botaoVira ? "none" : ""};

        img{
            width: 30px;
           position: absolute;
           bottom: 10px;
           right: 10px;
        }
     
`

const FormatacaoBotoes = styled.div`
     display: ${props => props.botaoVira ? "flex" : "none"};
     margin-left: 10px;
     margin-right: 10px;

     justify-content: space-between;
     
     

     button {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;

        color: #FFFFFF;
        border-radius: 5px;

        border: none;

        
     }
     

     button:nth-child(1){
        width: 85.17px;
        height: 37.17px;
        background-color: #FF3030;
        padding-left: 10px;

        position: absolute;
        bottom: 10px;
        left: 20px;
     }

     button:nth-child(2){
        width: 85.17px;
        height: 37.17px;
        background-color: #FF922E;

        position: absolute;
        bottom: 10px;
        left: 110px;
     }

     button:nth-child(3){
        width: 85.17px;
        height: 37.17px;
        background-color:#2FBE34 ;

        position: absolute;
        bottom: 10px;
        left: 200px;
     }
`


