import styled from 'styled-components'

import { IconProps } from '.'

interface ContainerProps {
    top: number
}
export const Container = styled.div<ContainerProps>`
    position: absolute;
    top: ${props => props.top}px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

export const Vector = styled.div<IconProps>`
    --wave-width: 2846px;
    --wave-height: 510px;

    @keyframes move_wave_${props => props.id} {
        0% {
            background-position-x: ${props => props.x}px;
        }
        100% {
            background-position-x: calc(var(--wave-width) + ${props => props.x}px);
        }
    }

    position: absolute;
    bottom: ${props => props.y}px;
    width: 100%;
    height: var(--wave-height);
    background-image: ${props => `url(${props.image})`};
    background-position-x: calc(var(--wave-width) + ${props => props.x}px);
    background-repeat: repeat no-repeat;
    transform-origin: center bottom;
    animation: move_wave_${props => props.id} ${props => props.duration}s linear infinite;
`
