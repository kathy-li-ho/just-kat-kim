import React from 'react';
import type {Pages} from '../../.tina/__generated__/types';
import {Content} from './content';
import {Photos} from './photos';
import styled from 'styled-components';
import {FooterImage} from './footer';
import {Video} from './video';

const Block = styled.section`
    font-family: 'Abel', sans-serif;
    font-size: 2rem;
    text-align: center;
    margin: 0 auto 50px;
    padding: 0 20px;

    @media (min-width: 768px) {
        max-width: 900px;
    }
`;

export const Blocks = (props: Pages) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function (block, i) {
                      switch (block.__typename) {
                          case 'PagesBlocksContent':
                              return (
                                  <Block key={i + block.__typename}>
                                      <Content data={block} />
                                  </Block>
                              );
                          case 'PagesBlocksPhotos':
                              return (
                                  <Block key={i + block.__typename}>
                                      <Photos data={block} />
                                  </Block>
                              );
                          case 'PagesBlocksVideo':
                              return (
                                  <Block key={i + block.__typename}>
                                      <Video data={block} />
                                  </Block>
                              );
                          case 'PagesBlocksFooterImage':
                              return (
                                  <FooterImage
                                      key={i + block.__typename}
                                      data={block}
                                  />
                              );
                          default:
                              return null;
                      }
                  })
                : null}
        </>
    );
};
