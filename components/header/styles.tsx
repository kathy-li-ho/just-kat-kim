import styled from 'styled-components';
import {HighlighterLink} from '../elements';
import {BP, COLORS, FONTS, SIZES} from '../style';

export const HeaderWrapper = styled.header`
    background: ${(props: {isOpaque: boolean}) =>
        props.isOpaque
            ? COLORS.WHITE
            : `linear-gradient(${COLORS.WHITE} 80%, ${COLORS.CLEAR} 100%)`};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    @media (${BP.MEDIUM}) {
        position: static;
        margin: 30px 0;
    }
`;

export const Stamp = styled.a`
    color: ${COLORS.BLACK};
    font-family: ${FONTS.ELITE};
    font-size: ${SIZES.TITLE};
    color: ${COLORS.BLACK};
    text-decoration: none;
    padding: 10px;

    @media (${BP.MEDIUM}) {
        position: absolute;
        top: 7px;
        left: 40px;
    }
`;

export const menuButtonHeight = '60px';

export const MenuButton = styled.button`
    background: ${COLORS.YELLOW};
    border-width: 0 6px 6px;
    border-style: double;
    border-color: ${COLORS.LIGHT_YELLOW};
    box-shadow: 0 0 5px 1px ${COLORS.BLACK15};
    height: ${menuButtonHeight};
    width: 50px;
    margin: 0 10px;
    padding: 20px 0 0;
    outline: 0;
    position: relative;
    top: -8px;

    & svg {
        fill: ${COLORS.LIGHT_YELLOW};
        margin: auto;
    }

    @media (${BP.MEDIUM}) {
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

    @media (${BP.MEDIUM}) {
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
    font-family: ${FONTS.ABEL};
    font-size: ${SIZES.BODY};
    text-decoration: none;
    text-transform: uppercase;

    &::before {
        width: ${(props: {isActive: boolean}) => (props.isActive ? '100%' : 0)};
    }
`;
