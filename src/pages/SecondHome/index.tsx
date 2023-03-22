import React from 'react'
import { Link } from 'react-router-dom'
import { Img } from 'src/style/global'

import { Button } from '@components/Button'
import { Wave } from '@components/Wave'

import { Container, GradientLayer, Header } from './styles'

const SecondHome: React.FC = () => {
    return (
        <Container>
            <GradientLayer />
            <Wave.Root>
                <Wave.Icon image='wave3.svg' x={-393} y={-79} duration={25}/>
                <Wave.Icon image='wave2.svg' x={150} y={-147} duration={20} />
                <Wave.Icon image='wave1.svg' x={583} y={0} duration={10} />
            </Wave.Root>
            <Header>
                <div className="logo-container">
                    <Link to={'/'}>
                        <Img id="logo" src="logo-complete.svg" width={786} height={171} />
                    </Link>
                </div>
                <div className="info-container">
                    <h1>
                        PRECISANDO DO<br/>
                        SEU AMBIENTE CLIMATIZADO?
                    </h1>
                    <p>
                        Oferecemos isso com qualidade e segurança.<br/>
                        Entre em contato agora mesmo e solicite um orçamento!
                    </p>
                    <Button.Root>
                        <Button.Icon src='whatsapp-icon.svg' width={24} height={24} />
                        <span>Solicite um orçamento</span>
                    </Button.Root>
                </div>
            </Header>
        </Container>
    )
}

export default SecondHome
