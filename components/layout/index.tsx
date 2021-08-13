import React from 'react';
import Head from 'next/head';
import {Header} from '../header';
import {Footer} from '../footer';
import layoutData from '../../content/global/index.json';
import {GlobalFooter, GlobalHeader} from '../../.tina/__generated__/types';
import {SiteMain} from './styles';

interface ILayout {
    children: React.ReactNode;
    data: {
        header: GlobalHeader;
        footer: GlobalFooter;
    };
}

export const Layout = ({data = layoutData, children}: ILayout) => (
    <>
        <Head>
            <title>Just Kat Kim</title>
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
        <Header data={data?.header} />
        <SiteMain>{children}</SiteMain>
        <Footer data={data?.footer} />
    </>
);

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      header {
        nav {
          href
          label
        }
      }
      footer {
        social {
          gmail {
            handle
            link
          }
          instagram {
            handle
            link
          }
          imdb {
            handle
            link
          }
        }
      }  
    }
  }
`;
