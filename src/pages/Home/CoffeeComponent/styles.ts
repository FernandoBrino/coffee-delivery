import styled from "styled-components";

export const CoffeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    padding: 0 2rem 2rem 2rem;
 
   img {
    width: 12rem;
    height: 12rem;
   }
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
    background-color: ${props => props.theme["base-button"]};

    svg {
        color: ${props => props.theme.purple};
    }
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
        font-size: 1.4rem;
    }

    b {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2.4rem;
    }
`

