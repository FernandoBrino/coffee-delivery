import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`

export const Location = styled.span`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.8rem;
    border-radius: 8px;

    color: ${props => props.theme["purple-dark"]};
    background-color: ${props => props.theme["purple-light"]};
    font-size: 1.4rem;

    > svg {
        color: ${props => props.theme.purple};
    }
`


export const Cart = styled.button`
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    position: relative;


    background-color: ${props => props.theme["yellow-light"]};

    &:hover {
        cursor: pointer;
    }

    > svg {
        color: ${props => props.theme["yellow-dark"]};
    }
`

export const CartItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    
    position: absolute;
    top: -8px;
    right: -8.35px;
    width: 2rem;
    height: 2rem;

    font-size: 1.2rem;
    font-weight: 700;

    color: ${props => props.theme.white};
    background-color: ${props => props.theme["yellow-dark"]};
`