import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        width: 80%;
        font-size: 12px;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        img {
            opacity: 0.8;
            
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }   
    
    @media screen and (max-width: 800px) {
        width: 44vw;

        button {
            display: block;
            opacity: 0.9;
            min-width: unset;
            padding: 0 10px;
        }

        &:hover {
            img {
                opacity: unset;
            }
    
            button {
                opacity: unset;
            }
        }
    }

    @media screen and (max-width: 400px) {
        margin-bottom: 5px;
    }
`

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`
export const Name = styled.span`
    width: 85%;
    margin-bottom: 15px;

    @media screen and (max-width: 800px) {
        font-size: 16px;
    }
    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`
export const Price = styled.span`
    width: auto;
    @media screen and (max-width: 800px) {
        font-size: 16px;
    }
    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`

