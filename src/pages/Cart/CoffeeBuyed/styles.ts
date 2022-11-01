import styled from "styled-components";

export const CoffeeBuyedContainer = styled.div`
    display: flex;
    gap: 2rem;

    > img {
        width: 6.4rem;
        height: 6.4rem;
    }
`

export const CoffeDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 70%;
`

export const CoffeeDescription = styled.div`
    display: flex;
    justify-content: space-between;


    h3 {
        font-size: 1.6rem;
        font-weight: 400;
        color: ${props => props.theme["base-subtitle"]};
    }

    p {
        font-size: 1.6rem;
        font-weight: 700;
        color: ${props => props.theme["base-text"]};
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 0.8rem;
`

export const ChangeQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 6px;
    gap: 0.6rem;
    background-color: ${props => props.theme["base-button"]};

    button {
        display: flex;
        align-items: center;
        border: none;
        background-color: ${props => props.theme["base-button"]};
    }

    svg {
        cursor: pointer;
        color: ${props => props.theme.purple};
    }
`

export const RemoveCoffee = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 6px;
    gap: 0.6rem;
    background-color: ${props => props.theme["base-button"]};
    cursor: pointer;

    p {
        font-size: 1.2rem;
        color: ${props => props.theme["base-text"]};
    }

    > svg {
        color: ${props => props.theme.purple};
    }
`