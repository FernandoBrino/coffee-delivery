import { useContext } from "react"

import { MapPinLine } from 'phosphor-react'

import { ItemsContext } from "../../contexts/ItemsContext"
import { CoffeeBuyed } from "./CoffeeBuyed";

import {  
    BaseCard,
    CartContainer, 
    CompleteRequest, 
    ConfirmButton, 
    HeaderAddress, 
    RequestDetails, 
    SelectedCoffees,
    Subtitle, 
    Total, 
    TotalBill, 
    TotalCoffees,
    TotalItems,
} from "./styles"
import { UserAddressForm } from "./UserAddressForm";

export const Cart = () => {
    const { coffeesInCart} = useContext(ItemsContext);

    const totalItems = coffeesInCart.reduce((acc, current) => acc += (current.price * current.quantity), 0)

    const shipping = 3;
    
    const total = shipping + totalItems;

    return (
        <CartContainer>
            <CompleteRequest>
                <Subtitle>Complete seu pedido</Subtitle>
                <RequestDetails>
                    <BaseCard>
                        <HeaderAddress>
                            <MapPinLine />
                            <span>
                                <p>Endereço de Entrega </p>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </span>
                        </HeaderAddress>

                        <UserAddressForm />
                    </BaseCard>
                    <BaseCard>
                    </BaseCard>
                </RequestDetails>
            </CompleteRequest>
            <SelectedCoffees>
                <Subtitle>Cafés selecionados</Subtitle>
                <TotalCoffees>
                        {coffeesInCart.map(coffee => (
                            <CoffeeBuyed coffee={coffee} key={coffee.id}/>
                        ))}

                        <TotalBill>
                            <TotalItems>
                                <p>Total de itens</p>
                                <p>R$ {totalItems}</p>
                            </TotalItems>

                            <TotalItems>
                                <p>Entrega</p>
                                <p>R$ {shipping}</p>
                            </TotalItems>

                            <Total>
                                <p>Total</p>
                                <p>R$ {total}</p>
                            </Total>
                        </TotalBill>

                        <ConfirmButton>
                            Confirmar pedido
                        </ConfirmButton>
                </TotalCoffees>
            </SelectedCoffees>
        </CartContainer>
    )
}