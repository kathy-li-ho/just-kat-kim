import React, {useEffect, useState} from 'react';
import {GmailIcon, ImdbIcon, InstagramIcon} from '../../assets/svgs';
import {
    FooterContainer,
    FooterCopy,
    Label,
    SocialBar,
    SocialLink,
} from './styles';
import {GlobalFooter} from '../../.tina/__generated__/types';
import {useRouter} from 'next/router';

interface IFooter {
    data: GlobalFooter;
}

export const Footer = ({data}: IFooter) => {
    if (!data || !data.social) {
        return null;
    }
    const router = useRouter();
    const [bgImage, setBgImg] = useState('');
    const [counter, setCounter] = useState(0);
    const {gmail, instagram, imdb} = data.social;

    useEffect(() => {
        const img = document?.getElementById('footerImg')?.dataset.img;
        setBgImg(img);
        setCounter(counter + 1);
    }, [router.asPath, counter]);

    return (
        <FooterContainer background={bgImage}>
            <SocialBar>
                {gmail && (
                    <SocialLink href={gmail.link} target="_blank">
                        <Label className="label">{gmail.handle}</Label>
                        <GmailIcon />
                    </SocialLink>
                )}
                {instagram && (
                    <SocialLink href={instagram.link} target="_blank">
                        <Label className="label">{instagram.handle}</Label>
                        <InstagramIcon />
                    </SocialLink>
                )}
                {imdb && (
                    <SocialLink href={imdb.link} target="_blank">
                        <Label className="label">{imdb.handle}</Label>
                        <ImdbIcon />
                    </SocialLink>
                )}
            </SocialBar>
            <FooterCopy>
                &copy;{new Date().getFullYear()} <strong>kat kim</strong>.
            </FooterCopy>
        </FooterContainer>
    );
};
