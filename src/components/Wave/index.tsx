import React from 'react'
import { RootProps } from 'src/interfaces/Compound'

import { Container, Vector } from './styles'

export interface IconProps {
    image: string
    x: number
    y: number
    duration: number
    id: string
}

export const Root: React.FC<RootProps & {top: number}> = ({children, top}) => {
    return (
        <Container top={top}>
            {children}
        </Container>
    )
}

export const Icon: React.FC<IconProps> = (props) => {
    return (
        <Vector {...props}/>
    )
}

export const Wave = {
    Root,
    Icon
}
