import { CoffeeBuyed } from "../../contexts/ItemsContext"

export enum ActionTypes {
    ADD_COFFEE_CART = 'ADD_COFFEE_CART',
    REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART',
    RESET_CART = 'RESET_CART',
}

export function addNewCoffeeIntoCart(newCoffee: CoffeeBuyed) {
    return {
        type: ActionTypes.ADD_COFFEE_CART,
        payload: {
            newCoffee,
        }
    }
}

export function removeCoffeeIntoCart(coffeeId: string) {
    return {
        type: ActionTypes.REMOVE_COFFEE_CART,
        payload: {
            coffeeId,
        }
    }
}

export function resetCoffeesIntoCart() {
    return {
        type: ActionTypes.RESET_CART,
    }
}