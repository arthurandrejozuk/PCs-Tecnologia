import styled from 'styled-components';
import catalogo from '../../../public/json/card.json';
import TopButton from '../TopButton';

const StyledDiv = styled.div`

    display: flex;
    align-items: center;
    margin-left: 100px;
    padding-right:12px ;
    border-radius: 4px;
    gap: 16px;
    margin-right: 100px;
    background-color: rgb(38, 93, 245, 0.9);
    margin-top: 16px;
    margin-bottom: 16px;
    width: 700px;
    img{
        width: 250px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    
    @media( max-width: 700px) {
        flex-wrap: wrap;
        max-width: 400px;
        padding-right:0;
        img{
            width: 100%;    
        }
        h1{
            padding: 0 12px;
        }
        p{
            padding: 0 12px 12px;
        }
    }
   
`
const StyledDivDesc = styled.div`
    
    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 12px;
    
    section{
        align-self: end;
        margin: 12px;
    }
    button{
        background-color: rgb(38, 93, 245, 0.9);
        padding: 12px ;
        border: 0;
        border-bottom: 1px solid antiquewhite;
        font-weight: 600;
    }
    button:hover{
        cursor: pointer;
    }
   a{
        display:inline-block;
        color: antiquewhite;
        transition: 0.1s;
    }
    a:hover{
        color: aliceblue;
    }
    p, .nomeComp{
        color:  ${props => props.theme.fontColor};
        font-weight: 600;
        font-size: 18px;
    }
    div{
        display: flex;
        text-align: center;
        align-items: center;
        gap: 8px;
    }
    div:hover{
        cursor: auto;
        .nomeComp{
            color:  ${props => props.theme.fontColor};
        }
    }
    h1{
        font-size: 28px;
        color: antiquewhite;
    }
    .nomeComp{
        color: rgb(38, 93, 245, 0);
        transition: 200ms;
        
    }
`

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export default function Cards () {
    return(
        <>
        <StyledSection>
            {catalogo.map(item => {
                return(
                    <StyledDiv key={item.id}>
                        <img src={item.imagem} alt={item.nome} />
                        <StyledDivDesc>
                            <div className='nome_desc'>
                                <h1>
                                    {item.nome} 
                                </h1>
                                <p className='nomeComp'>
                                   - {item.nomeComp}
                                </p>
                            </div>
                            <p>
                                {item.descricao}
                            </p>
                            <section>
                                <button>
                                    <a style={{textDecoration:"none"}} href={item.endereco}>
                                        Ver mais 
                                    </a>   
                                </button>
                            </section>
                        </StyledDivDesc>
                    </StyledDiv>
                )
            })} 
            <TopButton/>
        </StyledSection>
        </>
    )
}