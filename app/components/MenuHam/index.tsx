import styled from "styled-components";
import MenuAtivo from "./MenuAtivo";

const StyledMenuHam = styled.div`
    
    position: fixed;
    opacity: 0.9;
    height: 100%;
    z-index: 2;
    display: flex;
    right: 0;
    top: 0;
    padding-left:12px ;
    background-color: #012657;
    width: 30%;
    justify-content: center;
    padding-top: 12px;
    border-left: 2px solid #1d5596;
    transition: 500ms;

    span{
        display: inline-block;
        list-style-type: none;
        margin-right: 12px;
        font-size: 24px;
        height:0;
        transition: 300ms;
        color: rgb(29, 145, 240);
    }
    span:hover{
        cursor: pointer;
        color: antiquewhite;
    }


    @media (max-width: 700px) {
        width: 50%
    }
`


interface MenuHamProps {
    ativado: Boolean;
    children: React.ReactNode;
}

export default function MenuHam ({ativado, children}: MenuHamProps) {


   if(ativado){
        return(
            <StyledMenuHam>
                <MenuAtivo />
                <span>
                    {children}
                </span>
            </StyledMenuHam>
        )
   }
   return(
    <>

    </>
   )
}