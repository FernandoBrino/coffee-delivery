import { FC, useContext, useState } from "react";
import { Actions, Cart, CoffeeContainer, CoffeeContent, CoffeeType, Description, FillCart, Footer, Price, Types } from "./styles";

import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'
import { ItemsContext } from "../../../contexts/ItemsContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CoffeeProps {
    id: string,
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
    const { addCoffeeInCart } = useContext(ItemsContext);
    const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1);

    const showToastMessage = () => {
        toast.success(`${coffee.title} adicionado ao carrinho !`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const handleAddCoffee = () => {
        setCoffeeQuantity(state => state + 1);
    }

    const handleRemoveCoffee = () => {
        if(coffeeQuantity > 1) {
            setCoffeeQuantity(state => state - 1);
        }
    }
    
    const handleAddCoffeeInCart = () => {
        const coffeeToBeAdded = {
            id: coffee.id,
            title: coffee.title,
            price: coffee.price,
            quantity: coffeeQuantity,
            img: coffee.img,
        }

        addCoffeeInCart(coffeeToBeAdded)
        setCoffeeQuantity(1);
        showToastMessage();
    }

    return (
        <CoffeeContainer>
            <img src={coffee.img} />
            
            <CoffeeContent> 
                <Types>
                    {coffee.types.map(type => (
                        <CoffeeType key={coffee.id}>
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
                            <button onClick={handleRemoveCoffee}>
                                <Minus size={15} weight="bold"/>
                            </button>
                            
                            <p>{coffeeQuantity}</p>

                            <button onClick={handleAddCoffee}>
                                <Plus size={15} weight="bold" />
                            </button>
                        </FillCart>
                        <Cart onClick={handleAddCoffeeInCart}>
                            <ShoppingCartSimple  weight="fill" size={20}/>
                        </Cart>
                    </Actions>
                </Footer>
            </CoffeeContent>
        </CoffeeContainer>
    );
}