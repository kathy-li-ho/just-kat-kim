import React from 'react';
import styled from 'styled-components';
import type {Pages} from '../.tina/__generated__/types';
import {Content} from './blocks/content';
import {Footer} from './blocks/footer';
import {Photos} from './blocks/photos';
import {Video} from './blocks/video';
import {BodyText} from './elements';
import {BP} from './style';

const Block = styled(BodyText).attrs(() => ({
    as: 'section',
}))`
    text-align: center;
    margin: 0 auto 50px;
    padding: 0 20px;

    @media (${BP.MEDIUM}) {
        max-width: 900px;
    }
`;

export const Blocks = (props: Omit<Pages, 'id' | '_sys' | '_values'>) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function (block, i) {
                      switch (block.__typename) {
                          case 'PagesBlocksContent':
                              return (
                                  <Block
                                      data-tinafield={`blocks.${i}`}
                                      key={i + block.__typename}
                                  >
                                      <Content data={block} />
                                  </Block>
                              );
                          case 'PagesBlocksPhotos':
                              return (
                                  <Block
                                      data-tinafield={`blocks.${i}`}
                                      key={i + block.__typename}
                                  >
                                      <Photos data={block} />
                                  </Block>
                              );
                          case 'PagesBlocksVideo':
                              return (
                                  <Block
                                      data-tinafield={`blocks.${i}`}
                                      key={i + block.__typename}
                                  >
                                      <Video data={block} />
                                  </Block>
                              );
                          case 'PagesBlocksFooterImage':
                              return <Footer data={block} />;
                          default:
                              return null;
                      }
                  })
                : null}
        </>
    );
};
