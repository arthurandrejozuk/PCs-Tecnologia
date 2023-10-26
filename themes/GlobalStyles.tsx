import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans&family=Oswald:wght@300;500;600;700&family=montserrat:wght@300;400;500;600;700&display=swap');

  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.body};
  }
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
 
  * {
 
    box-sizing: border-box;
    margin: 0;
    padding: 0;

   
    @media(max-width: 700px ){
        body{
            width: fit-content;
        }
    }

  }
`;



export default GlobalStyles;
