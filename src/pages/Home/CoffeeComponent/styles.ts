import styled from "styled-components";

export const CoffeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
   img {
    width: 12rem;
    height: 12rem;
    position: relative;
    top: -2rem;
   }
`

export const CoffeeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem 1.3rem 2rem 1.3rem;
`

export const Types = styled.div`
    display: flex;
    gap: 0.4rem;
`

export const CoffeeType = styled.div`
    background-color: ${props => props.theme["yellow-light"]};
    padding: 0.4rem 0.8rem;
    border-radius: 8px;

    p {
        font-size: 1rem;
        font-weight: 700;
        color: ${props => props.theme["yellow-dark"]};
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 1.6rem 0 3.3rem 0;
    

    h2 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 2rem;
    }

    p {
        text-align: center;
        font-size: 1.4rem;
        color: ${props => props.theme["base-label"]};
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.3rem;
`

export const Actions = styled.div`
    display: flex;
    gap: 0.8rem;
`

export const Cart = styled.button`
    display: flex;
    border: none;
    padding: 0.8rem;
    border-radius: 6px;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.theme["purple-dark"]};

    > svg {
        color: ${props => props.theme.white};
    }
`

export const FillCart = styled.div`
    display: flex;
    padding: 0.8rem;
    border-radius: 6px;
    gap: 0.6rem;
    align-items: center;
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

export const Price = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${props => props.theme["base-text"]};

    p {
        font-size: 1.4rem;
    }

    b {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2.4rem;
    }
`

