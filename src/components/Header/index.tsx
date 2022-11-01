import { Actions, Cart, CartItems, HeaderContainer, Location } from "./styles"
import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg"

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ItemsContext } from "../../contexts/ItemsContext"

export const Header = () => {
    const { coffeesInCart } = useContext(ItemsContext);

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logoCoffeeDelivery} />
            </NavLink>

            <Actions>
                <Location>
                    <MapPin weight="fill" size={20}/>
                    <p>Porto Alegre, RS</p>
                </Location>

                <NavLink to="/cart" title="Cart">
                    <Cart>
                        <ShoppingCart weight="fill" size={20} />
                        <CartItems>{coffeesInCart.length}</CartItems>
                    </Cart>
                </NavLink>
                
            </Actions>
        </HeaderContainer>
    )
}