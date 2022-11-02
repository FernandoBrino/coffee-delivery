import { useContext, useEffect, useState } from "react"
import { ItemsContext } from "../../contexts/ItemsContext"
import { CoffeeBuyed } from "./CoffeeBuyed";
import { 
    Address, 
    CartContainer, 
    CompleteRequest, 
    ConfirmButton, 
    PaymentMethod, 
    SelectedCoffees, 
    Shipping, 
    Subtitle, 
    Total, 
    TotalBill, 
    TotalCoffees, 
    TotalCoffeesList,
    TotalItems
} from "./styles"


export const Cart = () => {
    const { coffeesInCart} = useContext(ItemsContext);
    
    const totalItems = coffeesInCart.reduce((acc, current) => acc + (current.price * current.quantity), 0)

    const shipping = 3;
    
    const total = shipping + totalItems;

    return (
        <CartContainer>
            <CompleteRequest>
                <Subtitle>Complete seu pedido</Subtitle>
                <Address></Address>
                <PaymentMethod></PaymentMethod>
            </CompleteRequest>
            <SelectedCoffees>
                <Subtitle>Cafés selecionados</Subtitle>
                <TotalCoffees>
                    <TotalCoffeesList>
                        {coffeesInCart.map(coffee => (
                            <CoffeeBuyed coffee={coffee} key={coffee.id}/>
                        ))}

                        <TotalBill>
                            <TotalItems>
                                <p>Total de itens</p>
                                <p>R$ {totalItems}</p>
                            </TotalItems>

                            <Shipping>
                                <p>Entrega</p>
                                <p>R$ {shipping}</p>
                            </Shipping>

                            <Total>
                                <p>Total</p>
                                <p>R$ {total}</p>
                            </Total>
                        </TotalBill>

                        <ConfirmButton>
                            CONFIRMAR PEDIDO
                        </ConfirmButton>
                    </TotalCoffeesList>
                </TotalCoffees>
            </SelectedCoffees>
        </CartContainer>
    )
}