import { FC, useContext, useEffect, useState } from "react"
import { Minus, Plus, Trash } from "phosphor-react";
import { 
    Actions, 
    ChangeQuantity, 
    CoffeDetails, 
    CoffeeBuyedContainer, 
    CoffeeDescription, 
    RemoveCoffee,
    Separator
} from "./styles";
import { ItemsContext } from "../../../contexts/ItemsContext";


interface CoffeeBuyed {
    id: string;
    title: string;
    price: number;
    quantity: number;
    img: string;
}

interface IProps {
    coffee: CoffeeBuyed;
}

export const CoffeeBuyed: FC<IProps> = ({ coffee }) => {
    const { removeCoffeeInCart, addCoffeeInCart } = useContext(ItemsContext);
    const [coffeeQuantity, setCoffeeQuantity] = useState<number>(coffee.quantity);

    const handleAddCoffeeInCart = () => {
        setCoffeeQuantity(state => state + 1);
        const coffeeToBeAdded = {
            id: coffee.id,
            title: coffee.title,
            price: coffee.price,
            quantity: coffeeQuantity === coffee.quantity ? coffeeQuantity + 1 : coffeeQuantity,
            img: coffee.img,
        }
       
        addCoffeeInCart(coffeeToBeAdded)
    }

    const handleReduceCoffeeInCart = () => {
        if(coffeeQuantity > 1) {
            setCoffeeQuantity(state => state - 1);
            const coffeeToBeAdded = {
                id: coffee.id,
                title: coffee.title,
                price: coffee.price,
                quantity:  coffeeQuantity === coffee.quantity ? coffeeQuantity - 1 : coffeeQuantity,
                img: coffee.img,
            }
            
            addCoffeeInCart(coffeeToBeAdded)
        }
    }

    const handleRemoveCoffeeInCart = () => {
        removeCoffeeInCart(coffee.id)
    }

    return (
        <>
            <CoffeeBuyedContainer>
                <img src={coffee.img}/>

                <CoffeDetails>
                    <CoffeeDescription>
                        <h3>{coffee.title}</h3>
                        <p>R$ {coffee.price}</p>
                    </CoffeeDescription>
                
                    <Actions>
                        <ChangeQuantity>
                            <button onClick={handleReduceCoffeeInCart}>
                                <Minus size={15} weight="bold"/>
                            </button>
                            
                            <p>{coffeeQuantity}</p>

                            <button onClick={handleAddCoffeeInCart}>
                                <Plus size={15} weight="bold" />
                            </button>
                        </ChangeQuantity>
                        <RemoveCoffee onClick={handleRemoveCoffeeInCart}>
                            <Trash size={15} weight="bold"/>
                            <p>REMOVER</p>
                        </RemoveCoffee>
                    </Actions>
                </CoffeDetails>
            </CoffeeBuyedContainer>
            <Separator></Separator>
        </>
        

    )
}