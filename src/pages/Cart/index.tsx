import { useContext } from "react"

import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

import { ItemsContext } from "../../contexts/ItemsContext"
import { CoffeeBuyed } from "./CoffeeBuyed";

import {  
    BaseCard,
    CartContainer, 
    CompleteRequest, 
    ConfirmButton, 
    Header,
    PaymentCard,
    PaymentMethod,
    RequestDetails, 
    SelectedCoffees,
    Subtitle, 
    Total, 
    TotalBill, 
    TotalCoffees,
    TotalItems,
} from "./styles"
import { UserAddressForm } from "./UserAddressForm";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export const Cart = () => {
    const { coffeesInCart } = useContext(ItemsContext);
    const { saveUserPaymentMethod, userPaymentMethod } = useContext(UserInfoContext);

    const totalItems = coffeesInCart.reduce((acc, current) => acc += (current.price * current.quantity), 0)

    const shipping = 3;
    
    const total = shipping + totalItems;


    const checkPaymentMethod = () => {
        if(!userPaymentMethod.length) {
            alert('Selecione um método de pagamento!')
        }
    }

    return (
        <CartContainer>
            <CompleteRequest>
                <Subtitle>Complete seu pedido</Subtitle>
                <RequestDetails>
                    <BaseCard>
                        <Header svgColor="yellow-dark">
                            <MapPinLine size={20}/>
                            <span>
                                <p>Endereço de Entrega </p>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </span>
                        </Header>

                        <UserAddressForm />
                    </BaseCard>
                    <BaseCard>
                        <Header svgColor="purple">
                            <CurrencyDollar size={20}/>
                            <span>
                                <p>Pagamento</p>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </span>
                        </Header>
                        <PaymentMethod>
                            <PaymentCard
                                userPaymentMethod={userPaymentMethod === 'Cartão de crédito'}
                                onClick={() => saveUserPaymentMethod('Cartão de crédito')}
                            >
                                <CreditCard size={20} />
                                <p>Cartão de crédito</p>
                            </PaymentCard>

                            <PaymentCard
                                userPaymentMethod={userPaymentMethod === 'Cartão de débito'}
                                onClick={() => saveUserPaymentMethod('Cartão de débito')}
                            >
                                <Bank size={20} />
                                <p>Cartão de débito</p>
                            </PaymentCard>

                            <PaymentCard 
                                userPaymentMethod={userPaymentMethod === 'Dinheiro'}
                                onClick={() => saveUserPaymentMethod('Dinheiro')}
                            >
                                <Money size={20} />
                                <p>Dinheiro</p>
                            </PaymentCard>
                        </PaymentMethod>
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
                       
                        <ConfirmButton type="submit" form="UserAddressForm" onClick={checkPaymentMethod}>   
                                Confirmar pedido
                        </ConfirmButton>
                </TotalCoffees>
            </SelectedCoffees>
        </CartContainer>
    )
}