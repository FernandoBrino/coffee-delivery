import { createContext, ReactNode, useState, useCallback } from "react";

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
    resetCart: () => void;
}

interface ItemsContextProviderProps {
    children: ReactNode;
}

export const ItemsContext = createContext({} as ItemsContextType)

export const ItemsContextProvider = ({children}: ItemsContextProviderProps) => {
    const [coffeesInCart, setCoffeesInCart] = useState<CoffeeBuyed[]>([]);

    const addCoffeeInCart = useCallback((newCoffee: CoffeeBuyed) => {
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
    }, [coffeesInCart]);

    const removeCoffeeInCart = (coffeeId: string) => {
        const coffeesInCartWithoutRemovedOne = coffeesInCart.filter(coffee => coffee.id !== coffeeId)

        setCoffeesInCart(coffeesInCartWithoutRemovedOne)
    }

    const resetCart = () => {
        setCoffeesInCart([]);
    }

    return (
        <ItemsContext.Provider 
            value={{ 
                coffeesInCart,
                addCoffeeInCart, 
                removeCoffeeInCart,
                resetCart,
            }}>
            {children}
        </ItemsContext.Provider>
    )
}