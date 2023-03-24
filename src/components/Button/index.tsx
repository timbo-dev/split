import React from 'react'
import { RootProps } from 'src/interfaces/Compound'
import { Img } from 'src/style/global'

import { Container } from './styles'

export const Root: React.FC<RootProps> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

interface IconProps {
    src: string
    width: number
    height: number
}

export const Icon: React.FC<IconProps> = (props) => {
    return (
        <Img {...props} />
    )
}

export const Button = {
    Root,
    Icon
}
