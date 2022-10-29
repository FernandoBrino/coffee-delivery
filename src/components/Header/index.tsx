import { Actions, Cart, HeaderContainer, Location } from "./styles"
import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg"

import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} />

            <Actions>
                <Location>
                    <MapPin weight="fill" />
                    <p>Porto Alegre, RS</p>
                </Location>

                <Cart>
                    <ShoppingCart weight="fill" />
                </Cart>
            </Actions>
        </HeaderContainer>
    )
}