import { styled } from "styled-components"
import GlobalStyles from "themes/GlobalStyles"

const StyledLoading = styled.div`
    
  display: flex;
  align-items: center;
  justify-content: center;

`

export default function Loading() {
    return(
        <>
    
            <h1>Carregando...</h1>
       
        </>
    )
}