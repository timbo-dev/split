import React from 'react'
import { RootProps } from 'src/interfaces/Compound'

import { Container, Vector } from './styles'

export interface IconProps {
    image: string
    x: number
    y: number
    duration: number
}

export const Root: React.FC<RootProps> = ({children}) => {
    return (
        <Container>
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
