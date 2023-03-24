import { ImgHTMLAttributes } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --aqua-100: #30A8DF;
        --aqua-200: #2182CC;
        --aqua-300: #005A9E;
        --aqua-800: #272869;
        --gray-900: #121214;
        --white: #fff;
        --green: #1BD741;
        --max-container-width: 1440px;
    }

    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       outline: none;
       font-size: 1.6rem;
    }

    html, body, #root {
       position: relative;
       width: 100%;
       height: 100%;
       font-size: 62.5%;
    }

    h1 {
        font-family: 'Exo';
        font-style: normal;
        font-weight: 700;
        font-size: 4.8rem;
        line-height: 5.8rem;
        color: var(--white)
    }
    h2 {
        font-family: 'Exo';
        font-style: normal;
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 5.8rem;
        color: var(--white)
    }

    p {
        font-family: 'Exo';
        font-style: normal;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: var(--white)
    }

    html {
       font-size: 62.5%;
       font-family: Arial;
       background: var(--aqua-200);
    }

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 750px) {
        html {
            font-size: 50%;
        }
    }
`
export const Img = styled.div<ImgHTMLAttributes<string>>`
    user-select: none;
    pointer-events: none;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    background-image: ${props => `url('${props.src}')`};
`
