import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
        width: 300px;
        height: 335px;
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
        width: 180px;
        height: 265px;
        margin-bottom: 20px;

        img {
            width: 180px;
            height: 250px;
        }

        button {
            top: 180px;
            display: block;
            opacity: 0.7;
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

    @media screen and (max-width: 480px) {
        margin-bottom: 5px;
    }
`

export const Footer = styled.div`
    width: 300px;
    height: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    @media screen and (max-width: 800px) {
        width: 180px;
        height: 10px;
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        margin-bottom: 5px;
    }
`
export const Name = styled.span`
    width: 85%;
    margin-bottom: 15px;

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
    @media screen and (max-width: 400px) {
        font-size: 12px;
    }
`
export const Price = styled.span`
    width: auto;
    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
    @media screen and (max-width: 400px) {
        font-size: 12px;
    }
`

