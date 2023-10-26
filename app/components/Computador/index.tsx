import styled from 'styled-components';
import computador from '../../../public/json/tec.json';

const Hstyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    color:  ${props => props.theme.fontColor};

`
const StyledCompu = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    img{
        border-radius: 12px;
    }
    ul{
        position: absolute;
    }
    li{       
        position: relative;
        font-weight: 600;
        color: #00ade2;
        font-size: 22px;        
        width: max-content;
    }
    a{
        text-decoration: none;
        color: #7da7d1;
        text-shadow: 1px 1px 2px #020405;
        display: flex;
    } 
    a:hover{
       opacity: 1;
       cursor: pointer;
    }  
    span{
        opacity: 0.0;
        transition: 250ms;
    }
    li:hover{
      .span{
        opacity: 1;
      }
    } 
    .processador{
        top: 24px;
        left: 136px; 
    }
    .memoria{
        top: 24px;
        left: 240px;
    }
    .cooler{
        bottom: 200px;
        right: 128px;
    }
    .ssd{
        top: 24px;
        left: 132px;
    }
    .placa_mae{
        bottom: 200px;
        left: 290px;
    }
    .placa_video{
        top: 64px;
    }
    @media (max-width: 700px){
        img{
            border-radius:0%;
        }
        span{
        opacity: 0.2;
        transition: 250ms;
    }
        .processador{
        top: 100px;
        left: 120px; 
    }
    .memoria{
        top: 100px;
        left: 200px;
    }
    .cooler{
        bottom: 200px;
        right: 128px;
    }
    .ssd{
        top: 8px;
        left: 112px;
    }
    .placa_mae{
        bottom: 200px;
        left: 290px;
    }
    .placa_video{
        top: 64px;
    }
    }
`


export default function Computador(){

    return(
        <>
            <Hstyled>
                <h1>Computador, peça por peça</h1>
            </Hstyled>
            
            {computador.map(compu => {
                return(

                    <StyledCompu>    
                        <ul>
                            <li className='processador'>
                                <a>Processador</a>
                                <span className='span'>Ryzen 9 5900X</span>
                            </li >
                            <li  className='memoria'>
                                <a>Memoria Ram</a>
                                <span className='span'>hyperX DDR4 2666MHz</span>
                            </li>
                            <li  className='cooler'>
                               <a>Cooler</a> 
                            </li>
                            <li  className='ssd'>
                                <a>SSD</a>
                            </li>
                            <li  className='placa_mae'>
                                <a>Placa Mãe</a>
                                <span className='span'>B550m-plus</span>
                            </li>
                            <li  className='placa_video'>
                                <a>Placa de Video</a>
                                <span className='span'>RTX 2060 SUPER</span>
                            </li>
                        </ul>
                        <img width={750}  src={compu.imagem}  alt={compu.nome} />
                    </StyledCompu>
                )
            })}
        </>
    )

}