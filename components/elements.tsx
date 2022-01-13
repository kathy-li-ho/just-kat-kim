import styled from 'styled-components';
import {BORDER, BP, COLORS, FONTS, SIZES} from './style';

export const BodyText = styled.span`
    font-family: ${FONTS.ABEL};
    font-size: ${SIZES.BODY};
    color: ${COLORS.BLACK80};
`;

export const HighlighterLink = styled.a`
    color: ${COLORS.BLACK};
    display: inline-block;
    padding: 0 5px;
    margin: 0 -5px;
    position: relative;
    text-decoration: underline;

    &::before {
        content: '';
        display: block;
        background-color: ${COLORS.LIGHT_YELLOW};
        transform: skew(-10deg);
        position: absolute;
        left: 0;
        width: 0;
        height: 100%;
        z-index: -1;
    }

    @media (${BP.MEDIUM}) {
        &:hover::before {
            width: 100%;
            transition: width 0.3s;
        }
    }
`;
export const TooltipLink = styled(HighlighterLink)`
    background: none;
    border: 0;
    font: inherit;

    &::after {
        background-color: ${COLORS.BLACK};
        content: attr(data-title);
        color: ${COLORS.WHITE};
        display: block;
        font-size: ${SIZES.SMALL};
        font-style: normal;
        opacity: 0;
        padding: 3px 5px;
        position: absolute;
        left: 50%;
        top: -30px;
        transform: translateX(-50%) scaleY(1.05) !important;
        transition: opacity 250ms, top 250ms;
        width: max-content;
    }

    &:hover::after {
        opacity: 1;
        top: -35px;
    }
`;

export const List = styled.ul`
    max-width: 400px;
    margin: auto;
    text-align: left;
`;

export const Resume = styled.a`
    background: ${COLORS.YELLOW};
    color: ${COLORS.WHITE};
    font-size: ${SIZES.BODY};
    text-decoration: none;
    border-radius: ${BORDER.RADIUS05};
    padding: 15px;

    & svg {
        height: 3.2rem;
        margin: 0 0.5ch -8px 0;
    }
`;
