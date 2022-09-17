import { HeaderContainer } from './styles'
import logotipo from '../../assets/logotipo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logotipo} alt="" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={20} color="#8047F8" weight="fill" />
          Contagem, MG
        </span>
        <NavLink to="/checkout" title="Cart">
          <ShoppingCart color="#C47F17" weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
