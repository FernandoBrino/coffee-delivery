import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    gap: 3.2rem;
`

export const CompleteRequest = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: flex-start;
`

export const RequestDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const BaseCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    border-radius: 0.6rem 4.4rem;
    padding: 4rem;

    background-color: ${props => props.theme["base-card"]};
`

export const Address = styled(BaseCard)`
    min-width: 64rem;
`

export const PaymentMethod = styled(BaseCard)`
    min-width: 64rem;
`

export const SelectedCoffees = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: flex-start;
`

export const TotalCoffees = styled(BaseCard)`
    min-width: 44.8rem;
`

export const Subtitle = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;

    color: ${props => props.theme["base-subtitle"]};
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
    text-transform: uppercase;

    border: none;

    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.white};
    transition: background-color 0.25s;

    &:hover {
        background-color: ${props => props.theme["yellow-dark"]};
    }
`

