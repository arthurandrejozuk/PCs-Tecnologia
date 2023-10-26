import styled from 'styled-components';
import {BiArrowBack} from 'react-icons/bi'
import React from 'react';
import VoltarButton from '../VoltarButton';


const StyledDiv = styled.div`
    margin-right: 300px ;
    margin-left: 300px ;
    
    
    h1{   
        color: ${props => props.theme.fontColor};
    }
    p{
        color: ${props => props.theme.fontColor};
    }
    
    @media (max-width:1350px){
        margin-right: 100px ;
        margin-left: 100px ;
    }

    `


const StyledImg = styled.img`
    width: 250px;
    float: left;
    margin-right: 12px;
    border-radius: 8px;
    @media (min-width: 1000px){
        margin-bottom: 40px;
    }
    `

const StyledButton = styled.a`
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
    `
interface InformacaoProps {
   descricao: string
   titulo: string
   imagem: string
}

export default function Informacao({descricao, titulo, imagem}:InformacaoProps){
    
    return(
        <>
            <StyledDiv>
                <div>
                    <StyledImg src={imagem} alt={titulo} />
                </div>
                
                    <h1>{titulo}</h1>
                    <p>
                    {descricao}
                    </p>
          
            </StyledDiv>
            <StyledButton href='/'>
                <VoltarButton/>
            </StyledButton>
        </>
       
    )
}