import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { PaymentContainer, BaseInputFormCheckout } from '../styles'

export function FormDelivery() {
  return (
    <form>
      <section>
        <header>
          <MapPinLine size={20} color="#C47F17" weight="bold" />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>
        <BaseInputFormCheckout />
      </section>

      <PaymentContainer>
        <header>
          <CurrencyDollar size={20} color="#8047F8" weight="bold" />
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>
        <nav>
          <button>
            <CreditCard size={14} color="#8047F8" weight="bold" />
            <p>Cartão de crédito</p>
          </button>
          <button>
            <Bank size={14} color="#8047F8" weight="bold" />
            <p>Cartão de débito</p>
          </button>
          <button>
            <Money size={14} color="#8047F8" weight="bold" />
            <p>Dinheiro</p>
          </button>
        </nav>
      </PaymentContainer>
    </form>
  )
}
