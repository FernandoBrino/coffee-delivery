import styled from "styled-components";


export const BaseInput = styled.input`
    padding: 1.2rem;
    font-size: 1.4rem;
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;

    color: ${props => props.theme["base-text"]};
    background-color: ${props => props.theme["base-input"]};

    &:focus {
        outline: transparent;
    }

    &::placeholder {
            color: ${props => props.theme["base-text"]};
        }
`

export const UserAddressFormContainer = styled.form`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 1.6rem;
`

export const Cep = styled.div`
    display: grid;
    grid-template-columns: 33%;
`

export const Street = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

export const Complement = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 1.2rem;
`

export const ComplementInput = styled.span`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 1.2rem;
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;
    background-color: ${props => props.theme["base-input"]};

    input {
        border: none;
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-label"]};
        width: 100%;
        font-size: 1.4rem;

        &:focus {
            outline: transparent;
        }

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }

    p {
        font-size: 1.2rem;
        font-style: italic;
        color: ${props => props.theme["base-label"]};
    }
`

export const CityState = styled.div`
    display: grid;
    grid-template-columns: 33% 50% 13%;
    grid-column-gap: 1.2rem;
`