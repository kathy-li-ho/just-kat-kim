import React from 'react';
import styled from 'styled-components';
import {PagesBlocksFooterImage} from '../../.tina/__generated__/types';
import {FooterContainer} from '../footer/styles';

interface IFooterImage {
    data: PagesBlocksFooterImage;
}

export const footerId = 'footer';

export const FooterImageWrapper = styled(FooterContainer)`
    background-image: url('${(props: {background: string}) =>
        props.background}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: auto;
    width: 100%;
`;

export const FooterImage = ({data}: IFooterImage) => (
    <FooterImageWrapper id={footerId} background={data.footerImg} />
);
