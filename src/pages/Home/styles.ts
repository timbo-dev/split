import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    .carousel-container {
        width: 100%;
    }

    .slider-margin {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 530px;
        padding: 16px;
    }

    #header-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80vh;
        min-height: 730px;
    }
    #ourclients-container {
        position: relative;
        display: flex;
        justify-content: center;
          align-items: flex-start;
        width: 100%;
        min-height: 300px;
        margin-bottom: 44px;
    }
    #social-midia {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin-bottom: 100px;
    }
`

export const CategoryTitle = styled.h2`
    font-family: 'Exo';
    font-style: italic;
    font-weight: 900;
    font-size: 4.8rem;
    line-height: 6.8rem;
    margin-bottom: 44px;
    text-align: center;
    color: var(--white);
    text-transform: uppercase;
    max-width: 90%;
`

export const GradientLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(180.09deg, #30A8DF 0.08%, rgba(255, 255, 255, .35) 27.6%, #2886CE 56.42%);
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: var(--max-container-width);
    height: 100%;

    .logo-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 95px;
        padding-bottom: 80px;
        z-index: 4;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 750px) {
        .logo-container div {
            width: 560px;
            height: 110px;
        }

        .info-container {
            align-items: center;
            text-align: center;
        }
    }

    @media screen and (max-width: 475px) {
        .logo-container div {
            width: 300px;
            height: 100px;
        }
    }
`

export const Services = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: var(--max-container-width);
    gap: 32px;
    flex-wrap: wrap;
    margin-bottom: 45px;
    @media screen and (max-width: 1260px) {
        gap: 16px;
    }
`

export const RequestBudget = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-bottom: 45px;
`

interface SliderItemProps {
    src: string
}
export const SliderItem = styled.div<SliderItemProps>`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: ${props => `url('${props.src}')`};
`

export const OurClients = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 82px;
    @media screen and (max-width: 1105px) {
        gap: 32px;
    }
    flex-wrap: wrap;
`

export const ClientLogo = styled.div<{src: string}>`
    min-width: 130px;
    min-height: 130px;
    background-position: center;
    background-size: cover;
    background-image: ${props => `url('${props.src}')`};
`

export const Footer = styled.footer`
    position: relative;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #copyright {
        font-size: 1.4rem;
    }

    span {
        font-family: 'Exo';
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.8rem;
        color: var(--white)
    }

    .footer-info {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;

        @media screen and (max-width: 1200px) {
            flex-direction: column-reverse;
            text-align: center;

            #logo {
                margin-bottom: 16px;
                @media screen and (max-width: 750px) {
                    width: 560px;
                    height: 110px;
                }

                @media screen and (max-width: 475px) {
                    width: 300px;
                    height: 100px;
                }
            }
        }
    }
`
