
import styled from "styled-components";

export default function Footer (props){

    console.log(props.arrayImagensRespostas.length)
    console.log(props.cards.length)
    return (
        <Embaixo>

            {
             (props.arrayImagensRespostas.length === props.cards.length) && <p data-test="finish-text"> {(props.arrayImagensRespostas.includes("errado")) ? "Putz..." : "Parabéns!"} </p>
            }
            

            <p data-test="footer"> {props.respondido}/{props.cards.length} CONCLUÍDOS </p>
             
             <p> 
                {props.arrayImagensRespostas.map((img) => {if(img === "errado")
                                                               {return <img data-test="no-icon" src={props.arrayImagens[1]} alt={"errado"}></img>}
                                                        else if(img === "quase")
                                                        {return <img data-test="partial-icon" src={props.arrayImagens[2]} alt={"quase"}></img>}

                                                        else {return <img data-test="zap-icon" src={props.arrayImagens[3]} alt={"certo"}></img>}})}

             </p>

             
             
   
        </Embaixo>
    );
}

const Embaixo = styled.div `

    width: 100%;
    height: 80px;
    background-color: white;
    position: fixed;

    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    
        color: #333333;
    }

    p:nth-child(1){
        margin-top: 10px;
        font-weight: bold;
    }

    img{
        margin-right: 5px;
        margin-bottom: 10px;
    }
`