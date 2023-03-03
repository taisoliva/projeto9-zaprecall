import logo from "../assets/logo.png"
import styled from "styled-components";

export default function Cabecalho ({trocaTela, setTrocaTela}){
    return(
        <ContainerInicio trocaTela={trocaTela}> 
        
            <img src={logo} alt={logo}></img>
            <p> ZapRecall </p>
            <button data-test="start-btn" onClick={() => setTrocaTela(false)} > Iniciar Recall! </button>
        
        </ContainerInicio> 
    );
}

const ContainerInicio = styled.div `
    display: ${props => props.trocaTela ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 150px auto;

    img {
        width: 130px;
        height: 170px;
    }

    p{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
    }

    button{

        width:250px;
        height:60px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #D70900;

        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;

        margin-top: 30px;
    }
`