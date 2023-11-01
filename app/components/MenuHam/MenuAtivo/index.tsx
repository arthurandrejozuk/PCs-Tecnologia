import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";

const StyledMenu = styled.div`

    text-decoration: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
     list-style-type: none;
     display: flex;
     flex-direction: column;
     gap: 32px;
     align-items: start;
     margin: 32px ;
     width: 100%;
     height: 100%;
    }
    h1{
        font-weight: 500;
        color: antiquewhite;
        
    }
    h2{
        color: antiquewhite;
        margin-bottom:12px;
    }
    a{
        text-decoration: none;
        color: rgb(29, 145, 240);
        font-size: 24px;
    }
    a:hover{
        color:antiquewhite;
    }
    z-index: 0;
   
`

 
export default function MenuAtivo() {


    return (
        <StyledMenu>
            <h2>Menu</h2>
            <h1>Computador</h1>
            <ul>
                <li>
                    <Link href='/componentes/1/'>
                        CPU
                    </Link>
                </li>
                <li>
                    <Link href='/componentes/2/'>
                       GPU
                    </Link>
                </li>
                <li>
                    <Link href='/componentes/3/'>
                        Memoria RAM
                    </Link>
                </li>
                <li>
                    <Link href='/componentes/4/'>
                        Storage
                    </Link>
                </li>
            </ul>
        </StyledMenu>
    )
}