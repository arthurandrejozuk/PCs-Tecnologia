import styled from "styled-components";
import React, { useState } from 'react';
import {MdDarkMode} from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs'

const BotaoStyled = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 80px;
    text-align: center;
    bottom: 120px;
    padding: 10px;
    border-radius:100%;
    border: 1px solid wheat;
    background-color: #265df5;
    :hover{
        cursor: pointer;
    }
    @media(max-width:700px){
        width: 80px;
        height: 80px;
    }
`



export default function BotaoTheme({onClick, boolean}) {


    if(boolean){
        return(
        <BotaoStyled onClick={onClick}>
            <MdDarkMode size={40}/>
         </BotaoStyled>
        )
    } else {
        return(
            <BotaoStyled onClick={onClick}>
                <BsFillSunFill size={40}/>
            </BotaoStyled>
        ) 
    }
}