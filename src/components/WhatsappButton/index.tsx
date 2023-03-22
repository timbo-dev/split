import React from 'react'

import { Container } from './styles'

const WhatsappButton: React.FC = () => {
    return (
        <Container href='http://google.com'>
            <img src="whatsapp-icon.svg" alt="" />
            <span>
                Solicite um orçamento
            </span>
        </Container>
    )
}

export default WhatsappButton
