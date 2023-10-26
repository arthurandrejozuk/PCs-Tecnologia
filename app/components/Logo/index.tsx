import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledImg = styled.img`
    
    width: 100px;
    height: 70px;
    opacity: 0.8;
    margin: 24px 8px 24px;
    border-radius: 8px;
    transition: 500ms;
    

`

const StyledLogo = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-size: 24px;
        font-weight: 500;
        color: antiquewhite;
        font-weight:600;
    }
`

interface LogoProps{
    children?: React.ReactNode
}

export default function Logo({children}: LogoProps) {
    return(
        <StyledLogo>
            <StyledImg src="https://media.istockphoto.com/id/1314343964/pt/foto/top-end-system-unit-for-gaming-computer-close-up.jpg?s=1024x1024&w=is&k=20&c=kwqw2Aq-8c1iG8tOc6CLooMR1rkhKEWXZZkbmZ7JLHI=" alt="logo sobre PC" />
            {children}
        </StyledLogo>
    )
}