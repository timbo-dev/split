import React, { FC } from 'react'

import WhatsappButton from '@components/WhatsappButton'

import { Container, GradientLayer, Header, Img, InitialInfo, OurServices, View } from './styles'

const Home: FC = () => {
    return (
        <Container>
            <View view_port_height={90}>
                <GradientLayer />
                <Header>
                    <Img id="logo" src="logo-complete.svg" width={786} height={171} />
                </Header>
                <div id='info-container'>
                    <InitialInfo>
                        <div id="text">
                            <h1>
                                PRECISANDO DO<br/>
                                SEU AMBIENTE CLIMATIZADO?
                            </h1>
                            <p>
                                Oferecemos isso com qualidade e segurança.<br/>
                                Entre em contato agora mesmo e solicite um orçamento!
                            </p>
                            <WhatsappButton />
                        </div>
                    </InitialInfo>
                </div>
            </View>
            <OurServices>
                <h1>
                    Nossos Serviços
                </h1>
            </OurServices>
            <div style={{height: '3000px'}}></div>
        </Container>
    )
}

export default Home
