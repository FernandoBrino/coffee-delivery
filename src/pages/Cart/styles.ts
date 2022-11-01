import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    gap: 3.2rem;
`

export const CompleteRequest = styled.div`
`

export const Address = styled.div`
`

export const PaymentMethod = styled.div`
`

export const SelectedCoffees = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const TotalCoffees = styled.div`
    min-width: 44.8rem;
    min-height: 49.8rem;
`

export const TotalCoffeesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border-radius: 0.6rem 4.4rem;
    padding: 4rem;

    background-color: ${props => props.theme["base-card"]};
`

export const Subtitle = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;

    color: ${props => props.theme["base-subtitle"]};
`

export const Separator = styled.span`
   border: 1px solid ${props => props.theme["base-button"]};
`

export const TotalBill = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
`

export const TotalItems = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme["base-text"]};
    
    > p {
        font-size: 1.4rem;
    }
`

export const Shipping = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme["base-text"]};
    
    > p {
        font-size: 1.4rem;
    }
`

export const Total = styled.span`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme["base-subtitle"]};

    p {
        font-size: 2rem;
        font-weight: 700;
    }
`

export const ConfirmButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;

    font-size: 1.4rem;
    font-weight: 700;

    border: none;

    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.white};
`

