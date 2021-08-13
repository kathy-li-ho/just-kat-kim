import React from 'react'
import type { Pages } from '../../.tina/__generated__/types'
import { Content } from './content'
import { Photos } from './photos'
import styled from 'styled-components'

const Block = styled.section`
    font-family: 'Abel', sans-serif;
    text-align: center;
    margin-bottom: 50px;
`

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
                              )
                          case 'PagesBlocksPhotos':
                              return (
                                  <Block key={i + block.__typename}>
                                      <Photos data={block} />
                                  </Block>
                              )
                          case 'PagesBlocksFooterImage':
                              return (
                                  <div
                                      key={i + block.__typename}
                                      id="footerImg"
                                      data-img={block.footerImg}
                                  ></div>
                              )
                          default:
                              return null
                      }
                  })
                : null}
        </>
    )
}
