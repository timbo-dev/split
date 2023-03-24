import React, { ReactNode } from 'react'
import { RootProps } from 'src/interfaces/Compound'
import { Img } from 'src/style/global'

import { Container } from './styles'

interface TextProps {
    children: ReactNode
}

interface IconProps {
    src: string
}

const Root: React.FC<RootProps> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Title: React.FC<TextProps> = ({children}) => {
    return (
        <h3>
            {children}
        </h3>
    )
}

const Text: React.FC<TextProps> = ({children}) => {
    return (
        <p>
            {children}
        </p>
    )
}

const Icon: React.FC<IconProps> = ({src}) => {
    return (
        <Img src={src} width={128} height={130} />
    )
}

export const Card = {
    Root,
    Title,
    Text,
    Icon
}
