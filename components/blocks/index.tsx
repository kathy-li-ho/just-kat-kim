import React from 'react';
import type {Pages} from '../../.tina/__generated__/types';
import {Content} from './content';
import {Photos} from './photos';
import styled from 'styled-components';
import {Footer} from './footer';
import {Video} from './video';
import {BP, FONTS, SIZES} from '../style';
import {BodyText} from '../elements';

const Block = styled(BodyText).attrs((props) => ({
    as: 'section',
}))`
    text-align: center;
    margin: 0 auto 50px;
    padding: 0 20px;

    @media (${BP.MEDIUM}) {
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
                                  <Footer
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
