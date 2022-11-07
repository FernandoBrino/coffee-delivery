import styled from "styled-components";

interface IProps {
    colorResume: 'yellow-dark' | 'yellow' | 'purple';
}


export const SuccessfullyRequestContainer = styled.div`
    display: flex;
    justify-content: space-between;

    > img {
        padding-top: 11rem;
    }
`

export const DetailsPurchase = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const CongratsPurchase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 3.2rem;
        color: ${props => props.theme["yellow-dark"]};
    }

    p {
        font-size: 2rem;
    }
`

export const DescriptionPurchase = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    gap: 3.2rem;
    min-width: 52.6rem;
    min-height: 27rem;

    background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
    border: 1px solid transparent;
    border-radius: 0.6rem 3.6rem;
`

export const ResumeIcon = styled.div<IProps>`
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 20px;
    width: 3.2rem;
    height: 3.2rem;
    
    background-color: ${props => props.theme[props.colorResume]};

    svg {
        color: ${props => props.theme.white};
    }
`

export const ResumeContainerDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`

export const TextDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${props => props.theme["base-text"]};
`