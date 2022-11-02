import { createContext, ReactNode, useState } from "react";

interface CoffeeBuyed {
    id: string;
    title: string;
    price: number;
    quantity: number;
    img: string;
}

interface ItemsContextType {
    coffeesInCart: CoffeeBuyed[];
    addCoffeeInCart: (newCoffee: CoffeeBuyed) => void;
    removeCoffeeInCart: (coffeeId: string) => void;
}

interface ItemsContextProviderProps {
    children: ReactNode;
}

export const ItemsContext = createContext({} as ItemsContextType)

export const ItemsContextProvider = ({children}: ItemsContextProviderProps) => {
    const [coffeesInCart, setCoffeesInCart] = useState<CoffeeBuyed[]>([]);

    const addCoffeeInCart = (newCoffee: CoffeeBuyed) => {
        const coffeeAlreadyOnCart = coffeesInCart.find(coffee => coffee.id === newCoffee.id);

        if(coffeeAlreadyOnCart) {
            const updateCoffeeQuantity = coffeesInCart.map(coffee => {
                if(coffee.id === newCoffee.id) {
                    return { ...coffee, quantity: newCoffee.quantity };
                }
                
                return coffee
            })
            
            setCoffeesInCart(updateCoffeeQuantity);
        } else {
            setCoffeesInCart(state => [...state, newCoffee]);
        }
    }

    const removeCoffeeInCart = (coffeeId: string) => {
        const coffeesInCartWithoutRemovedOne = coffeesInCart.filter(coffee => coffee.id !== coffeeId)

        setCoffeesInCart(coffeesInCartWithoutRemovedOne)
    }

    return (
        <ItemsContext.Provider 
            value={{ 
                addCoffeeInCart, 
                removeCoffeeInCart, 
                coffeesInCart,
            }}>
            {children}
        </ItemsContext.Provider>
    )
}