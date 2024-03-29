import React from 'react';
import Head from 'next/head';
import {Header, IGlobalHeader} from '../header';
import layoutData from '../../content/global/index.json';
import {ContentWrapper, SiteWrapper} from './styles';

interface ILayout {
    children: React.ReactNode;
    data?: {
        header: IGlobalHeader;
    };
}

export const Layout = ({data = layoutData, children}: ILayout) => (
    <>
        <Head>
            <title>Just Kat Kim</title>
            <meta
                name="description"
                content="The personal website of Kat Kim"
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>

        <SiteWrapper>
            <Header data={data?.header} />
            <ContentWrapper>{children}</ContentWrapper>
        </SiteWrapper>
    </>
);
