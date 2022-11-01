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
          <a>
            <MapPin size={20} color="#8047F8" weight="fill" />
            Contagem, MG
          </a>
        </span>
        <NavLink to="/checkout" title="Cart">
          <ShoppingCart color="#C47F17" weight="fill" size={20} />
          <p></p>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
