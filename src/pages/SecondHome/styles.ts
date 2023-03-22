import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const GradientLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, var(--aqua-100) 0%, rgba(255, 255, 255, 0) 53.29%);
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90vh;
    background: black;

    .logo-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 95px;
        padding-bottom: 80px;
        z-index: 4;
    }

    .info-container {
        width: 50%;
        height: 100%;
        background: orange;
    }
`
