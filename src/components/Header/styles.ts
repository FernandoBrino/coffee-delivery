import styled from "styled-components";

export const HeaderContainer = styled.div`
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

    > svg {
        color: ${props => props.theme.purple};
    }
`


export const Cart = styled.span`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.8rem;
    border-radius: 8px;

    background-color: ${props => props.theme["yellow-light"]};

    > svg {
        color: ${props => props.theme["yellow-dark"]};
    }
`