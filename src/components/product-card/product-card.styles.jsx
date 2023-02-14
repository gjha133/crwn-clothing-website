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
            transform: scale(1.05);
            opacity: 0.8;
            transition: transform 10s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }   
    
    @media screen and(max-width: 800px) {
        width: 40vw;
    
        &:hover {
            img {
                opacity: unset;
            }
    
            button {
                opacity: unset;
            }
        }
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
`
export const Price = styled.span`
    width: auto;
`

