import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`

    z-index: 1;
    background-size:cover;
    height: 400px;
    opacity: 0.9;
    border-top: 1px solid rgb(29, 145, 240) ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    h2{
        color: antiquewhite;
        text-shadow: 1px 2px 2px black;
        font-size: 42px;
    }
    
`

interface BannerProps {
    children: React.ReactNode;
    banner: string;
}

export default function Banner({children, banner}: BannerProps ) {
    return(
        <StyledBanner style={{backgroundImage:`${banner}`}}>  
        <h2>
            {children}
        </h2>
        </StyledBanner>
    )
}