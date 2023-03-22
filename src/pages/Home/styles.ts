import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

export const GradientLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, var(--aqua-100) 0%, rgba(255, 255, 255, 0) 53.29%);
`

export const InitialInfo = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    z-index: 5;

    #text {
        width: 50%;
        height: 100%;
    }
`

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;

    #info-container {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

interface ViewProps {
    view_port_height?: number
    view_port_width?: number
}
export const View = styled.div<ViewProps>`
    width: ${props => props.view_port_width ? `${props.view_port_width}vw` : '100%'};
    height: ${props => props.view_port_height ? `${props.view_port_height}vh` : '100vh'};
`

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 95px;
    padding-bottom: 80px;
    z-index: 4;
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

export const OurServices = styled.div`
    width: 90%;
`
