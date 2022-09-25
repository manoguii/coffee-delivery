import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import ImageSuccess from '../../assets/ImageSuccess.svg'
import { CoffeeContext } from '../../contexts/CoffeeContextProvider'
import { ContainerMain, Delivery, Locale, Payment } from './styles'

export function Success() {
  const { form } = useContext(CoffeeContext)
  return (
    <ContainerMain>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <ul>
          <li>
            <Locale>
              <MapPin color="#FFFF" weight={'fill'} size={16} />
            </Locale>
            {form.map((adress) => {
              return (
                <p key={adress.id}>
                  Entrega em
                  <span> {adress.rua},</span>
                  <span>{`${adress.numero} ${adress.bairro}`} - </span>
                  <span>{adress.cidade},</span>
                  <span>{adress.uf}</span>
                </p>
              )
            })}
          </li>
          <li>
            <Delivery>
              <Timer color="#FFFF" weight={'fill'} size={16} />
            </Delivery>
            <p>
              Previsão de entrega
              <span>20 min - 30 min</span>
            </p>
          </li>
          <li>
            <Payment>
              <CurrencyDollar color="#FFFF" weight={'fill'} size={16} />
            </Payment>
            <p>
              Pagamento na entrega
              <span>Cartão de Crédito</span>
            </p>
          </li>
        </ul>
        <img src={ImageSuccess} alt="" />
      </div>
    </ContainerMain>
  )
}
