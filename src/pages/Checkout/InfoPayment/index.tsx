import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../../contexts/CoffeeContextProvider'
import { InfoPaymentContainer } from './styles'

export function InfoPayment() {
  const { cart } = useContext(CoffeeContext)

  const sumCart = cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity * currentValue.price,
    0,
  )

  const sumQuantity = cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0,
  )

  const delivery =
    sumQuantity < 5
      ? `R$ ${(3.5).toFixed(2).replace('.', ',')}`
      : 'Frete Grátis'

  const total = delivery === 'Frete Grátis' ? sumCart : sumCart + 3.5

  return (
    <InfoPaymentContainer>
      <ul>
        <li>
          <p>Total de itens</p>
          <span>R$ {sumCart.toFixed(2).replace('.', ',')}</span>
        </li>
        <li>
          <p>Entrega</p>
          <span>{delivery}</span>
        </li>
        <li>
          <p>Total</p>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </li>
      </ul>
      <NavLink to="/success" title="Success">
        confirmar pedido
        <button type="submit"></button>
      </NavLink>
    </InfoPaymentContainer>
  )
}
