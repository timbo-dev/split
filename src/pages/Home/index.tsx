import React from 'react'
import 'react-multi-carousel'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom'
import { Img } from 'src/style/global'

import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Wave } from '@components/Wave'

import 'react-multi-carousel/lib/styles.css'

import { CategoryTitle, ClientLogo, Container, Footer, GradientLayer, Header, OurClients, RequestBudget, Services, SliderItem } from './styles'

const Home: React.FC = () => {
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
                    <div className="info-container">
                        <h1>
                            PRECISANDO DO<br/>
                            SEU AMBIENTE CLIMATIZADO?
                        </h1>
                        <p>
                        Oferecemos isso com qualidade e segurança.<br/>
                        Entre em contato agora mesmo e solicite um orçamento!
                        </p>
                        <Link to='https://api.whatsapp.com/message/YM5JDJNOIKWWO1?autoload=1&app_absent=0' target={'_blank'}>
                            <Button.Root>
                                <Button.Icon src='whatsapp-icon.svg' width={24} height={24} />
                                <span>Solicite um orçamento</span>
                            </Button.Root>
                        </Link>
                    </div>
                </Header>
            </div>
            <CategoryTitle>
                Nossos Serviços
            </CategoryTitle>
            <Services>
                <Card.Root>
                    <Card.Icon src='gear-with-tool.svg' />
                    <Card.Title>
                        Instalação
                    </Card.Title>
                    <Card.Text>
                        Atendimento especializado das
                        principais marcas do mercado oferecendo mão
                        de obra específica em instalações.
                    </Card.Text>
                </Card.Root>
                <Card.Root>
                    <Card.Icon src='double-gears.svg' />
                    <Card.Title>
                        Manutenção
                    </Card.Title>
                    <Card.Text>
                        Com técnicos treinados nas principais fábricas,
                        podemos oferecer serviços com garantia
                        e soluções técnicas especializadas.
                    </Card.Text>
                </Card.Root>
                <Card.Root>
                    <Card.Icon src='bucket.svg' />
                    <Card.Title>
                        Higiênização
                    </Card.Title>
                    <Card.Text>
                        Atendimento especializado das
                        principais marcas do mercado oferecendo mão
                         de obra específica em instalações.
                    </Card.Text>
                </Card.Root>
                <Card.Root>
                    <Card.Icon src='infra.svg' />
                    <Card.Title>
                        Infraestrutura
                    </Card.Title>
                    <Card.Text>
                        Podemos instalar pontos de espera para ar-condicionado em imóveis sem necessidade de intervenções estruturais ou em acabamentos.
                    </Card.Text>
                </Card.Root>
            </Services>
            <CategoryTitle>
                Solicite um Orçamento
            </CategoryTitle>
            <RequestBudget>
                <Link to='https://api.whatsapp.com/message/YM5JDJNOIKWWO1?autoload=1&app_absent=0' target={'_blank'}>
                    <Button.Root>
                        <Button.Icon src='whatsapp-icon.svg' width={24} height={24} />
                        <span>Solicite um orçamento</span>
                    </Button.Root>
                </Link>
            </RequestBudget>
            <Carousel
                draggable={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 8000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 600
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 1
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1
                    }
                }}

            >
                <div className="slider-margin">
                    <SliderItem src="slider-01.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-02.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-03.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-04.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-05.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-06.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-07.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-08.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-09.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-10.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-11.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-12.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-13.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-14.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-15.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-16.jpg" />
                </div>
                <div className="slider-margin">
                    <SliderItem src="slider-17.jpg" />
                </div>
            </Carousel>
            <CategoryTitle>
                Nossos Clientes
            </CategoryTitle>
            <div id="ourclients-container">
                <Wave.Root top={300}>
                    <Wave.Icon id="top" image='wave3.svg' x={327} y={79} duration={15}/>
                    <Wave.Icon id="middle" image='wave2.svg' x={-292} y={147} duration={25} />
                    <Wave.Icon id="bottom" image='wave1.svg' x={0} y={0} duration={35} />
                </Wave.Root>
                <OurClients>
                    <ClientLogo src="coc.png" />
                    <ClientLogo src="sabesp.png" />
                    <ClientLogo src="sequoia.png" />
                    <ClientLogo src="serra-azul.png" />
                    <ClientLogo src="valmont.png" />
                </OurClients>
            </div>
            <CategoryTitle>
                Siga nossas redes sociais
            </CategoryTitle>
            <div id='social-midia'>
                <Link to='https://www.instagram.com/splitarcondicionado/' target='_blank'>
                    <Img src='instagram-icon.svg' width={48} height={48} />
                </Link>
                <Link to='https://www.facebook.com/splitarcondicionado1/?locale=pt_BR' target='_blank'>
                    <Img src='facebook-icon.svg' width={48} height={48} />
                </Link>
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

export default Home
