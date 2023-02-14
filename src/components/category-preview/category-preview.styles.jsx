import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`
export const Title = styled(Link)`
    font-size: 28px;
    cursor: pointer;
    margin-bottom: 25px;
`
export const Preview = styled.div`
    display: flex;
    justify-content: space-between;

@media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
}
`