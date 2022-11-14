import { ActionTypes } from "./actions";
import { produce } from 'immer'

export interface CoffeeBuyed {
    id: string;
    title: string;
    price: number;
    quantity: number;
    img: string;
}

interface CoffeesState {
    coffeesInCart: CoffeeBuyed[]
}

export function cartItemsReducer(state: CoffeesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_COFFEE_CART: {
            return produce(state, (draft) => {
                const updateCoffeeQuantity = draft.coffeesInCart.find(coffee => coffee.id === action.payload.newCoffee.id);
                
                if(updateCoffeeQuantity) {
                    updateCoffeeQuantity.quantity = action.payload.newCoffee.quantity;
                } else {
                    draft.coffeesInCart.push(action.payload.newCoffee);
                }
            })
        }
            
        case ActionTypes.REMOVE_COFFEE_CART: {
            return produce(state, (draft) => {
                const coffeesWithoutDeletedOne = draft.coffeesInCart.filter(coffee => coffee.id !== action.payload.coffeeId);
                draft.coffeesInCart = coffeesWithoutDeletedOne;
            })
        }

        case ActionTypes.RESET_CART: {
           return produce(state, (draft) => {
                draft.coffeesInCart = [];
           })
        }
    
        default:
            return state;
    }
}