import styled from "styled-components";

import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 440px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    overflow-x: hidden;

    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
        margin-top: auto;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
}

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
}

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
}

    /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
}
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    height: 440px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`




