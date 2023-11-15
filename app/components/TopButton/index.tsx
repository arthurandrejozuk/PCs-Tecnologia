import {AiOutlineArrowUp} from 'react-icons/ai';
import styled from 'styled-components';

const Arrow = styled.div`
    background-color: #ebe2d6;
    border-radius: 100%;
    border: 1px solid ${props => props.theme.fontColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-top: 16px;
    a{
        text-decoration: none;
        color:#002244
    }
    @media(max-width:700px){
        width: 80px;
        height: 80px;
        font-size: 36px;
    }
`

export default function TopButton() {


    return(
       <Arrow>
           <a href='#menu'><AiOutlineArrowUp/></a>
       </Arrow>
    )
}