import styled from 'styled-components';

export const HighlighterLink = styled.a`
    color: black;
    display: inline-block;
    padding: 0 5px;
    margin: 0 -5px;
    position: relative;
    text-decoration: underline;

    &::before {
        content: '';
        display: block;
        background-color: rgba(255, 240, 90, 0.5);
        transform: skew(-10deg);
        position: absolute;
        left: 0;
        width: 0;
        height: 100%;
    }

    @media (min-width: 768px) {
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
        background-color: black;
        content: attr(data-title);
        color: white;
        display: block;
        font-size: 1.5rem;
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
