import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
export const Title = styled(Link)`
    font-size: 2rem;
    cursor: pointer;
    margin-bottom: 25px;
`
export const Preview = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
`