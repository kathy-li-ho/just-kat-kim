import React from 'react'
import styled from 'styled-components'
import { PagesBlocksFooterImage } from '../../.tina/__generated__/types'

interface IFooterImage {
    data: PagesBlocksFooterImage
}

const FooterContainer = styled.footer`
    background: url('${(props: { background: string }) => props.background}')
        center no-repeat;
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow: hidden;
    position: relative;
    min-height: 60vw;
    width: 100%;

    @media (min-width: 576px) {
        min-height: 35vh;
    }
`

export const FooterWrapper = ({ data }: IFooterImage) => (
    <FooterContainer background={data.footerImg} />
)
