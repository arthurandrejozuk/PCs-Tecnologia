import styled from "styled-components";
import Logo from "../Logo";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
import MenuHam from "../MenuHam";
import {AiOutlineCloseCircle as Fecha, AiTwotoneHome} from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import Link from 'next/link'

const StyledHeader = styled.header`
    
    width: 100%;
    background-color: #012657;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    
    .menu-hamburguer{
        font-size: 40px;
        transition: 400ms;
        color: rgb(29, 145, 240);
    }
    .menu-hamburguer:hover{
        color: antiquewhite;
        cursor: pointer;
    }

   
    `;

const OpcoesPc = styled.a`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    color: rgb(29, 145, 240) ;
    text-decoration: none;
    font-size: 24px; 
    transition: 500ms;
    a{
        flex-direction: column;
        color: rgb(29, 145, 240) ;
        text-decoration: none;
        font-size: 36px;
        text-align: center;
    }
    h2{
        font-weight: 500;
        font-size: 28px;
    }
    @media (max-width: 700px){
       h2{
        display: none;
       }   
  
    }
    `

const StyledItems = styled.div`
    gap: 40px;
    display: flex;
    justify-content: center;
    align-items: center;;
    flex-wrap: wrap;
    color: #043d6b;
    text-align: center;
    a:hover{
        color: rgb(230, 245, 255);
        font-size: 36;
    }
    .link{
        text-decoration: none;
    }
`


export default function Cabecalho() {
    
    const [ativa, setAtiva] = useState(false);

    return(
        <StyledHeader id="menu">
            <Logo> 
            <h1>
                PCs & Tecnologia
            </h1>
            </Logo>
            <StyledItems>
                <Link className="link" href="/">
                    <OpcoesPc>
                        <AiTwotoneHome size={36}/>                    
                        <h2>Home</h2>
                    </OpcoesPc>
                </Link>
                <Link className="link" href="/sobre">
                    <OpcoesPc>
                        <FcAbout size={36}/>
                        <h2>Sobre</h2>
                    </OpcoesPc>
                </Link>
            </StyledItems>
            <section>
                <GiHamburgerMenu  onClick={() => !ativa ? setAtiva(true): setAtiva(false)} className="menu-hamburguer"/>
                <MenuHam ativado={ativa}><Fecha onClick={() => setAtiva(false)}/></MenuHam>
            </section>
        </StyledHeader>
    )
}