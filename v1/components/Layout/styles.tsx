import styled from 'styled-components'

export const SiteMain = styled.div`
    font-family: 'Abel', sans-serif;
    font-size: 2rem;
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 100px 20px 20px;
    margin: auto;

    @media (min-width: 768px) {
        padding: 100px 30px 30px;
    }

    @media (min-width: 992px) {
        padding: 30px 30px;
        max-width: 900px;
        font-size: 2rem;
    }
`
