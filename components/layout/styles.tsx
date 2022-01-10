import styled from 'styled-components';
import {menuButtonHeight} from '../header/styles';
import {BP} from '../style';

export const SiteWrapper = styled.div`
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    @media (${BP.MEDIUM}) {
        min-height: calc(100vh - 60px);
    }
`;

export const ContentWrapper = styled.div`
    margin-top: 40px;

    @media (${BP.MOBILE_ONLY}) {
        padding-top: ${menuButtonHeight};
    }
`;
