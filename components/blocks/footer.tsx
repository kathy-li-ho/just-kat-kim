import React from 'react';
import styled from 'styled-components';
import {PagesBlocksFooterImage} from '../../.tina/__generated__/types';
import {GmailIcon, ImdbIcon, InstagramIcon} from '../../assets/svgs';

interface IFooterImage {
    data: PagesBlocksFooterImage;
}

const FooterWrapper = styled.div`
    background-image: url('${(props: {background: string}) =>
        props.background}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 40vh;
`;

const FooterCopy = styled.span`
    background: black;
    color: white;
    font-family: 'Special Elite', serif;
    font-size: 1.5em;
    line-height: 1.5;
    letter-spacing: 0.2rem;
    text-align: center;
    padding: 2px 1ch 0;
    margin: 15px auto;
`;

const SocialBar = styled.div`
    background: white;
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const SocialLink = styled.a`
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
        & span {
            opacity: 0;
        }

        & [class$='color'] {
            fill: lightgray !important;
        }
    }
`;

const Handle = styled.span`
    font-family: 'Abel', sans-serif;
    font-size: 2rem;
    color: darkgray;
    display: block;
    margin: 0 -5rem;
    transition: opacity 0.3s;
`;

export const Footer = ({data}: IFooterImage) => (
    <FooterWrapper background={data?.footerImg}>
        <SocialBar>
            <SocialLink href="mailto:justkatkim@gmail.com" target="_blank">
                <Handle>justkatkim</Handle>
                <GmailIcon />
            </SocialLink>

            <SocialLink
                href="https://www.instagram.com/justkatkim/"
                target="_blank"
            >
                <Handle>@justkatkim</Handle>
                <InstagramIcon />
            </SocialLink>

            <SocialLink
                href="https://www.imdb.com/name/nm10071786/"
                target="_blank"
            >
                <Handle>Kat Kim</Handle>
                <ImdbIcon />
            </SocialLink>
        </SocialBar>
        <FooterCopy>
            &copy;{new Date().getFullYear()} <strong>kat kim</strong>.
        </FooterCopy>
    </FooterWrapper>
);
