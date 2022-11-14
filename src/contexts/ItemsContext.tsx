import { createContext, ReactNode, useReducer } from "react";
import { addNewCoffeeIntoCart, removeCoffeeIntoCart, resetCoffeesIntoCart } from "../reducers/cartItems/actions";
import { cartItemsReducer } from "../reducers/cartItems/reducer";
export interface CoffeeBuyed {
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
    const [coffeeState, dispatch] = useReducer(cartItemsReducer, {
        coffeesInCart: [],
    });

    const { coffeesInCart } = coffeeState;
    
    const addCoffeeInCart = (newCoffee: CoffeeBuyed) => {
        dispatch(addNewCoffeeIntoCart(newCoffee));
    }

    const removeCoffeeInCart = (coffeeId: string) => {
        dispatch(removeCoffeeIntoCart(coffeeId));
    }

    const resetCart = () => {
        dispatch(resetCoffeesIntoCart());
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