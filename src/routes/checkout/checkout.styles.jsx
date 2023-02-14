import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;

    @media screen and (min-width: 800px) {
        width: 55%;
        min-height: 90vh;
    }
`

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;
    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
        font-size: 12px;
        &:last-child {
            width: 10%;
        }
    }
`

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    @media screen and (max-width: 800px) {
        font-size: 24px;
    }
`