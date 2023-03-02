import logo from "../assets/logo.png"
import styled from "styled-components";

export default function Cabecalho (){
    return(
        <Header> 
        
            <img src={logo} alt={logo}></img>
            <p> ZapRecall </p>
        
        </Header> 
    );
}

const Header = styled.div `
    display: flex;
    justify-content: center;
    margin: 50px auto;
    
    img { 
        width: 52px;
        height: 60px;
    }

    p { 
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;

        color: #FFFFFF;
    }
`