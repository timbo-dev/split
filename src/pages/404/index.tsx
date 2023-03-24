import React from 'react'
import { Link } from 'react-router-dom'
import { Img } from 'src/style/global'

import { Wave } from '@components/Wave'

import { Container, Footer, GradientLayer, Header } from '../Home/styles'

const Error404: React.FC = () => {
    return (
        <Container>
            <div id="header-container">
                <GradientLayer />
                <Header>
                    <Wave.Root top={200}>
                        <Wave.Icon id="top" image='wave3.svg' x={327} y={79} duration={15}/>
                        <Wave.Icon id="middle" image='wave2.svg' x={-292} y={147} duration={25} />
                        <Wave.Icon id="bottom" image='wave1.svg' x={0} y={0} duration={35} />
                    </Wave.Root>
                    <div className="logo-container">
                        <Link to={'/'}>
                            <Img id="logo" src="logo-complete.svg" width={786} height={171} />
                        </Link>
                    </div>
                    <h1>
                        Erro 404
                    </h1>
                    <h2>
                        Página não encontrada
                    </h2>
                </Header>
            </div>
            <Footer>
                <div className="footer-info">
                    <div className="address">
                        <span>
                            Rua Belisário Borges da Costa, 95<br />
                            JD. Santa Edwirgens, São João da Boa Vista - SP
                        </span>
                        <br/>
                        <br/>
                        <span>
                            +55 (19) 99967-5194
                        </span>
                    </div>
                    <Link to='/'>
                        <Img id='logo' src='white-logo.svg' width={526} height={137} />
                    </Link>
                </div>
                <span id="copyright">
                    Copyright © 2023 Split Ar Condicionado. Todos Direitos Reservados
                </span>
            </Footer>
        </Container>
    )
}

export default Error404
