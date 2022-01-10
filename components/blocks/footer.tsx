import React from 'react';
import styled from 'styled-components';
import {PagesBlocksFooterImage} from '../../.tina/__generated__/types';
import {GmailIcon, ImdbIcon, InstagramIcon} from '../../assets/svgs';
import {BodyText} from '../elements';
import {COLORS, FONTS, SIZES} from '../style';

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
    background: ${COLORS.BLACK};
    box-shadow: 0 0 5px 1px ${COLORS.BLACK15};
    color: ${COLORS.WHITE};
    font-family: ${FONTS.ELITE};
    font-size: ${SIZES.SMALL};
    line-height: 1.5;
    letter-spacing: 0.2rem;
    padding: 2px 1ch 0;
    margin: 15px auto;
`;

const SocialBar = styled.div`
    background: ${COLORS.WHITE};
    box-shadow: 0 5px 5px ${COLORS.BLACK15};
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const SocialLink = styled.a.attrs((props) => ({
    target: '_blank',
    rel: 'noopener noreferrer',
}))`
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
        opacity: 0.5;

        & span {
            opacity: 0;
        }

        & svg {
            filter: grayscale(60%);
        }
    }
`;

const Handle = styled(BodyText)`
    display: block;
    margin: 0 -5rem;
    transition: opacity 0.3s;
`;

export const Footer = ({data}: IFooterImage) => (
    <FooterWrapper background={data?.footerImg}>
        <SocialBar>
            <SocialLink href="mailto:justkatkim@gmail.com">
                <Handle>justkatkim</Handle>
                <GmailIcon />
            </SocialLink>

            <SocialLink href="https://www.instagram.com/justkatkim/">
                <Handle>@justkatkim</Handle>
                <InstagramIcon />
            </SocialLink>

            <SocialLink href="https://www.imdb.com/name/nm10071786/">
                <Handle>Kat Kim</Handle>
                <ImdbIcon />
            </SocialLink>
        </SocialBar>
        <FooterCopy>
            &copy;{new Date().getFullYear()} <strong>kat kim</strong>.
        </FooterCopy>
    </FooterWrapper>
);
