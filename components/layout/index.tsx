import React from 'react';
import Head from 'next/head';
import {Header} from '../header';
import layoutData from '../../content/global/index.json';
import {GlobalHeader, GlobalMeta} from '../../.tina/__generated__/types';
import {ContentWrapper, SiteWrapper} from './styles';

interface ILayout {
    children: React.ReactNode;
    data: {
        meta: GlobalMeta;
        header: GlobalHeader;
    };
}

export const Layout = ({data = layoutData, children}: ILayout) => (
    <>
        <Head>
            <title>{data.meta?.title}</title>
            <meta name="description" content={data.meta?.description} />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css?family=Abel&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap"
                rel="stylesheet"
            />
        </Head>

        <SiteWrapper>
            <Header data={data?.header} />
            <ContentWrapper>{children}</ContentWrapper>
        </SiteWrapper>
    </>
);

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      meta {
        title
        description
      }
      header {
        nav {
          href
          label
        }
      }
    }
  }
`;
