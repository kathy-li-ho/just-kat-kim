import styled from 'styled-components';
import {HighlighterLink} from '../elements';

export const HeaderWrapper = styled.header`
    background: ${(props: {isOpaque: boolean}) =>
        props.isOpaque
            ? 'white'
            : 'linear-gradient(rgba(255,255,255,1) 80%,rgba(255,255,255,0) 100%)'};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    @media (min-width: 768px) {
        position: static;
        margin: 30px 0;
    }
`;

export const Stamp = styled.a`
    font-family: 'Special Elite', serif;
    font-size: 5rem;
    color: black;
    text-decoration: none;
    padding: 10px;

    @media (min-width: 768px) {
        position: absolute;
        top: 7px;
        left: 40px;
    }
`;

export const menuButtonHeight = '60px';

export const MenuButton = styled.button`
    background: gold;
    border-width: 0 6px 6px;
    border-style: double;
    border-color: lemonchiffon;
    box-shadow: 0 0 5px 1px var(--shadow-color);
    height: ${menuButtonHeight};
    width: 50px;
    margin: 0 10px;
    padding: 20px 0 0;
    outline: 0;
    position: relative;
    top: -8px;

    & svg {
        fill: ivory;
        margin: auto;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 85px;
    transition: height 300ms, opacity 300ms, padding-bottom 300ms;

    height: ${(props: {isOpen: boolean}) => (props.isOpen ? '160px' : 0)};
    opacity: ${(props: {isOpen: boolean}) => (props.isOpen ? 1 : 0)};
    padding-bottom: ${(props: {isOpen: boolean}) =>
        props.isOpen ? '20px' : 0};

    @media (min-width: 768px) {
        flex-direction: row;
        width: 45%;
        min-width: 500px;
        max-width: 600px;
        margin: 0 auto;
        height: auto;
        opacity: 1;
        padding-bottom: 0;
    }
`;

export const NavLabel = styled(HighlighterLink)`
    font-family: 'Abel', sans-serif;
    font-size: 2em;
    text-decoration: none;
    text-transform: uppercase;

    &::before {
        width: ${(props: {isActive: boolean}) => (props.isActive ? '100%' : 0)};
    }
`;
