import styled from "styled-components";
import React from 'react';
import {MdDarkMode} from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs'

const BotaoStyled = styled.div`
    
 
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
`



export default function BotaoTheme({onClick}) {

  return(
   
        <BotaoStyled onClick={onClick}>
           <MdDarkMode size={24}/>
        </BotaoStyled>
    
  )
}