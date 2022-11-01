import { createContext, ReactNode, useState } from "react";

interface CoffeeBuyed {
    id: number;
    title: string;
    price: number;
    quantity: number;
    img: string;
}

interface ItemsContextType {
    coffeesInCart: CoffeeBuyed[];
    addCoffeeInCart: (newCoffee: CoffeeBuyed) => void;
    removeCoffeeInCart: (coffeeId: number) => void;
    updateCoffeQuantityInCart: (coffeeId: number, quantity: number) => void;
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
                    updateCoffeQuantityInCart(coffee.id, newCoffee.quantity)
                }
                
                return coffee
            })
            
            setCoffeesInCart(updateCoffeeQuantity);
        } else {
            setCoffeesInCart(state => [...state, newCoffee]);
        }
    }

    const removeCoffeeInCart = (coffeeId: number) => {
        const coffeesInCartWithoutRemovedOne = coffeesInCart.filter(coffee => coffee.id !== coffeeId)

        setCoffeesInCart(coffeesInCartWithoutRemovedOne)
    }

    const updateCoffeQuantityInCart = (coffeeId: number, quantity: number) => {
        const coffeeAlreadyOnCart = coffeesInCart.find(coffee => coffee.id === coffeeId);

        if(coffeeAlreadyOnCart) {
            const updateCoffeeQuantity = coffeesInCart.map(coffee => {
                if(coffee.id === coffeeId) {
                   return { ...coffee, quantity: quantity };
                }
                
                return coffee
            })
            
            setCoffeesInCart(updateCoffeeQuantity);
        }
    }

    return (
        <ItemsContext.Provider 
            value={{ 
                addCoffeeInCart, 
                removeCoffeeInCart, 
                updateCoffeQuantityInCart,
                coffeesInCart 
            }}>
            {children}
        </ItemsContext.Provider>
    )
}