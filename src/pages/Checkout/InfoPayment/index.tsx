import { NavLink } from 'react-router-dom'
import { InfoPaymentContainer } from './styles'

export function InfoPayment() {
  return (
    <InfoPaymentContainer>
      <ul>
        <li>
          <p>Total de itens</p>
          <span>R$ </span>
        </li>
        <li>
          <p>Entrega</p>
          <span></span>
        </li>
        <li>
          <p>Total</p>
          <span>R$</span>
        </li>
      </ul>
      <NavLink to="/success" title="Success">
        confirmar pedido
        <button type="submit"></button>
      </NavLink>
    </InfoPaymentContainer>
  )
}
