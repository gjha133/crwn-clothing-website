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
        margin-top: 5px;
    }

    @media screen and (max-width: 800px) {
        height: 320px;
        padding: 15px;
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
    overflow-x: hidden;

    @media screen and (max-width: 800px) {
        height: 500px;
    }
`




