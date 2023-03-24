import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Exo';
    font-style: italic;
    font-weight: 900;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--aqua-300);
    color: var(--white);
    width: calc(50% - 16px);
    height: 478px;
    border-radius:25px;
    translate: 0;
    text-align: center;
    transition: background-color .5s, translate .5s;

    &:hover {
        background-color: rgba(0,90,158, .5);
        cursor: default;
        translate: 0 -10px;
    }

    @media screen and (max-width: 850px) {
        width: 100%;
        &:hover {
            background-color: rgba(0,90,158, .5);
            cursor: default;
            translate: 0;
        }
    }

    h3 {
        font-size: 3.6rem;
        line-height: 5.1rem;
    }

    p {
        font-size: 2.4rem;
        line-height: 3.4rem;
        font-weight: 900;
        font-style: italic;
        padding: 32px;
    }
`
