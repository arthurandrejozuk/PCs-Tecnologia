import {AiOutlineArrowUp} from 'react-icons/ai';
import styled from 'styled-components';

const Arrow = styled.div`
    background-color: antiquewhite;
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
`

export default function TopButton() {


    return(
       <Arrow>
           <a href='#menu'><AiOutlineArrowUp/></a>
       </Arrow>
    )
}