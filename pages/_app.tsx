import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import GlobalStyles from 'themes/GlobalStyles';
import Loading from './loading';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import {darkTheme, lightTheme} from '../themes/theme';
import BotaoTheme from 'app/components/BotaoTheme';


export default function App({ Component, pageProps }: AppProps) {

    const [theme, setTheme] = useState('light')
    const [isLoading, setIsLoading] = useState(true);
    const [carregado, setCarregado] = useState(false);
    const [active, setActive] = useState(true)

    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        active === true ? setActive(false) : setActive(true);
    }

    


    useEffect(() => {
        const storedIsLoading = localStorage.getItem('isLoading');
    
        if (storedIsLoading === 'false') {
          setIsLoading(false);
        } else {
          const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem('isLoading', 'false');
          }, 2000);
          
          window.onload = () => {
            // Tudo na página está carregado
            setCarregado(true);
          };

          return () => {
            clearTimeout(loadingTimeout);
          };
        }
      }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {isLoading ? (
        <Loading/>
      ) : (
       <>
            <Head>
                <title>PCs-Tecnologia</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9721865588144455"
                    crossOrigin="anonymous"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-HDG4605RYY"></script>
                <script 
                    dangerouslySetInnerHTML={{
                        __html: 
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', 'G-HDG4605RYY');
                        `
                    }}
                />
                 
            </Head>
            <GlobalStyles/> 
            <BotaoTheme boolean={active} onClick={() => {themeToggle()}}/>
            <Component {...pageProps} /> 
       </>
      )}
    </ThemeProvider>
  )
} 
