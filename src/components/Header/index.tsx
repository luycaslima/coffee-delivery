import { NavLink } from 'react-router-dom'
import { CarrinhoButton, HeaderContainer, LocationSpan } from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} title="Home" alt="" />
      </NavLink>
      <nav>
        <LocationSpan>
          <MapPin size={22} weight="fill" />
          Porto Alegre
        </LocationSpan>

        <NavLink to="/carrinho" title="Carrinho">
          <CarrinhoButton>
            <ShoppingCart size={22} weight="fill" />
          </CarrinhoButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
