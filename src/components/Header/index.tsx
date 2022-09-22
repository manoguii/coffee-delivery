import { HeaderContainer } from './styles'
import logotipo from '../../assets/logotipo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContextProvider'

export function Header() {
  const { cart } = useContext(CoffeeContext)

  const quantityOfProductsInCart = cart.length
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logotipo} alt="" />
      </NavLink>
      <nav>
        <span>
          <NavLink to="/success" title="Success">
            <MapPin size={20} color="#8047F8" weight="fill" />
            Contagem, MG
          </NavLink>
        </span>
        <NavLink to="/checkout" title="Cart">
          <ShoppingCart color="#C47F17" weight="fill" size={20} />
          <p>{quantityOfProductsInCart}</p>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
