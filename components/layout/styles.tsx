import styled from 'styled-components';
import {menuButtonHeight} from '../header/styles';

export const SiteWrapper = styled.div`
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    @media (min-width: 768px) {
        min-height: calc(100vh - 60px);
    }
`;

export const ContentWrapper = styled.div`
    margin-top: 40px;

    @media (max-width: 767px) {
        padding-top: ${menuButtonHeight};
    }
`;
