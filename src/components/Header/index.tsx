import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} title="Home" alt="" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} />
          Porto Alegre
        </span>
        <NavLink to="/carrinho" title="Carrinho">
          <ShoppingCart size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
