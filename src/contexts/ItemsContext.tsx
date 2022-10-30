import { createContext, ReactNode, useState } from "react";

interface CoffeeBuyed {
    id: Number;
    title: string;
    price: number;
    quantity: number;
    img: string;
}

interface ItemsContextType {
    addCoffeeInCart: (coffee: CoffeeBuyed) => void;
    removeCoffeeInCart: (id: number) => void;
}


interface ItemsContextProviderProps {
    children: ReactNode;
}

export const ItemsContext = createContext({} as ItemsContextType)

export const ItemsContextProvider = ({children}: ItemsContextProviderProps) => {
    const [coffeesInCart, setCoffeesInCart] = useState<CoffeeBuyed[]>([]);

    const addCoffeeInCart = (coffee: CoffeeBuyed) => {
        setCoffeesInCart(state => [...state, coffee]);
    }

    const removeCoffeeInCart = (id: number) => {
        const coffeesInCartWithoutRemovedOne = coffeesInCart.filter(coffee => coffee.id !== id)

        setCoffeesInCart(coffeesInCartWithoutRemovedOne)
    }

    return (
        <ItemsContext.Provider value={{addCoffeeInCart, removeCoffeeInCart}}>
            {children}
        </ItemsContext.Provider>
    )
}