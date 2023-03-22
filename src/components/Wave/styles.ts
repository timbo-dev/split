import styled from 'styled-components'

import { IconProps } from '.'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`

export const Vector = styled.div<IconProps>`
    @keyframes move_wave {
        0% {
            translate: 20px;
        }
        50% {
            translate: 25%;
        }
        100% {
            translate: 50%;
        }
    }
    position: absolute;
    top: ${props => props.y}px;
    left: -200%;
    width: 300%;
    height: 90%;
    background-position: 0 bottom;
    background-image: ${props => `url(${props.image})`};
    background-position-x: ${props => props.x}px;
    background-repeat: repeat no-repeat;
    transform-origin: center bottom;
    animation: move_wave ${props => props.duration}s linear infinite;
`
