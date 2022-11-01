import styled from "styled-components";

interface IProps {
    colorResume: 'yellow-dark' | 'yellow' | 'base-text' | 'purple';
}

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14rem;
`
export const CoffeeIntroduction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const IntroductionText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6.6rem;
`

export const ResumeTitle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.6rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 4.8rem;
        line-height: 6.2rem;
    }

    p {
        font-size: 2rem;
        line-height: 2.6rem;
    }
`

export const ResumeApp = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
   
    div {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        line-height: 2rem;
    }
`

export const IconResume = styled.span<IProps>`  
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

export const CoffeeList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
`

export const Subtitle = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3.2rem;  
`

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem 3.2rem;
`



