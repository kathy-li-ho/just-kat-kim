import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: url('${(props: { background: string }) => props.background}')
        center no-repeat;
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow: hidden;
    position: relative;
    min-height: 60vw;
    width: 100%;

    @media (min-width: 576px) {
        min-height: 35vh;
    }
`
export const FooterCopy = styled.span`
    align-self: center;
    background: black;
    color: white;
    font-family: 'Special Elite', serif;
    font-size: 1.5em;
    line-height: 1.5;
    letter-spacing: 0.2rem;
    text-align: center;
    padding: 2px 1ch 0;
    margin: 15px;
    opacity: 0.9;
`

export const SocialBar = styled.div`
    background: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
`

export const SocialLink = styled.a`
    text-decoration: none;
    text-align: center;
    padding: 0 10px;
    margin: 0 10px;

    &::before {
        display: none;
    }

    & svg {
        width: 30px;
        height: 30px;
    }

    &:not(:hover) {
        & .label {
            opacity: 0;
        }

        & [class$='color'] {
            fill: lightgray !important;
        }
    }
`
export const Label = styled.span`
    font-family: 'Abel', sans-serif;
    font-size: 2rem;
    color: darkgray;
    display: block;
    margin: 0 -5rem;
    transition: opacity 0.3s;
`
