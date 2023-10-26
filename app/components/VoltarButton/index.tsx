import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const StyledButton = styled.button`

        margin-top:12px ;
        padding: 12px;
        max-width: 100px;
        justify-content: center;
        display: flex;
        align-items:center;
        gap: 4px;
        background-color: #ffa600;
        border-radius: 12px;
        border: 1px solid;
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