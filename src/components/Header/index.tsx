import { HeaderContainer } from './styles'
import logotipo from '../../assets/logotipo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logotipo} alt="" />
      <nav>
        <span>
          <MapPin size={20} color="#8047F8" weight="fill" />
          Contagem, MG
        </span>
        <a href="#">
          <ShoppingCart color="#C47F17" weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
