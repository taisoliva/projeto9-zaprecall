
import styled from "styled-components";

export default function Footer (){
    return (
        <Embaixo>
            <p> 0/4 CONCLUÍDOS </p>
        </Embaixo>
    );
}

const Embaixo = styled.div `

    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;

    bottom: 0;

    display: flex;
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
`