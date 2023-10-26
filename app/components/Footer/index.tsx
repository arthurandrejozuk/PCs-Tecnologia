import styled from "styled-components";
import Logo from "../Logo";

const StyledFooter = styled.footer`
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #0863da;
    border-top: 1px solid;
    margin-top: 60px;
    h3{
        font-weight: 500;
        color: #023258;
    }
    a{
        transition: 400ms;
    }
    a:hover{
        color:#001be6;
        cursor: pointer;
    }
`

export default function Footer() {
    return(
        <StyledFooter>
            <Logo children={<h1>PCs</h1>}/>
            <h3>Feito por <a>@arthurandrejozuk</a></h3>
        </StyledFooter>
    )
}