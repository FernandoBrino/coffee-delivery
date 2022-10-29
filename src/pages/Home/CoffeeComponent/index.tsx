import { FC } from "react";
import { Actions, Cart, CoffeeContainer, CoffeeType, Description, FillCart, Footer, Price, Types } from "./styles";

import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'

interface CoffeeProps {
    id: Number,
    title: string,
    description: string,
    types: string[],
    price: number,
    img: string,
}

interface IProps {
    coffee: CoffeeProps;
}

export const CoffeeComponent: FC<IProps> = ({ coffee }) => {
    return (
        <CoffeeContainer>
            <img src={coffee.img} />
            
            <Types>
                {coffee.types.map(type => (
                    <CoffeeType>
                        <p>{type}</p>
                    </CoffeeType>
                ))}
            </Types>
            
            

            <Description>
                <h2>{coffee.title}</h2>
                <p>{coffee.description}</p>
            </Description>

            <Footer>
                <Price>
                    <p>R$</p>  
                    <b>{coffee.price}</b>
                </Price>
                <Actions>
                    <FillCart>
                        <Minus size={15} weight="bold"/>
                        <p></p>
                        <Plus size={15} weight="bold"/>
                    </FillCart>
                    <Cart>
                        <ShoppingCartSimple  weight="fill" size={20}/>
                    </Cart>
                </Actions>
            </Footer>
        </CoffeeContainer>
    );
}