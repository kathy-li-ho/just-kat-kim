import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 40vh;
`;

export const FooterWrapper = styled(FooterContainer)`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const FooterCopy = styled.span`
    background: black;
    color: white;
    font-family: 'Special Elite', serif;
    font-size: 1.5em;
    line-height: 1.5;
    letter-spacing: 0.2rem;
    text-align: center;
    align-self: center;
    padding: 2px 1ch 0;
    margin: 15px;
`;

export const SocialBar = styled.div`
    background: white;
    padding: 20px;
    display: flex;
    justify-content: center;
`;

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
`;
export const Label = styled.span`
    font-family: 'Abel', sans-serif;
    font-size: 2rem;
    color: darkgray;
    display: block;
    margin: 0 -5rem;
    transition: opacity 0.3s;
`;
