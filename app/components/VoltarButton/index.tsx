import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const StyledButton = styled.button`

        margin-top:24px ;
        padding: 12px;
        max-width: 100px;
        justify-content: center;
        display: flex;
        align-items:center;
        gap: 8px;
        background-color: #ffa600;
        border: 0;
        border-bottom: 1px solid;
      
`

export default function VoltarButton(){
    return(
        <>
            <StyledButton>
                <BiArrowBack/>
                 Voltar
            </StyledButton>
        </>
    )
}