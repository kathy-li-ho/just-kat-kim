import styled from 'styled-components';

export const SiteMain = styled.div`
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0 0;
    min-height: 100vh;

    @media (min-width: 768px) {
        padding-top: 30px;
        min-height: calc(100vh - 60px);
    }
`;
