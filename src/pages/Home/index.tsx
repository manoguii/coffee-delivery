import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffeeDelivery from '../../assets/imagemCoffe.svg'
import { CoffeeCard } from './CoffeeCard'
import {
  CartIcon,
  CoffeetIcon,
  ContainerMain,
  ContainerSection,
  PackingIcon,
  TimerIcon,
} from './styles'

export function Home() {
  return (
    <>
      <ContainerSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <CartIcon>
                <ShoppingCart size={16} color={'#FFFF'} weight={'fill'} />
              </CartIcon>
              <p>Compra simples e segura</p>
            </li>
            <li>
              <PackingIcon>
                <Package size={16} color={'#FFFF'} weight={'fill'} />
              </PackingIcon>
              <p>Embalagem mantém o café intacto</p>
            </li>
            <li>
              <TimerIcon>
                <Timer size={16} color={'#FFFF'} weight={'fill'} />
              </TimerIcon>
              <p>Entrega rápida e rastreada</p>
            </li>
            <li>
              <CoffeetIcon>
                <Coffee size={16} color={'#FFFF'} weight={'fill'} />
              </CoffeetIcon>
              <p>O café chega fresquinho até você</p>
            </li>
          </ul>
        </div>
        <img src={imageCoffeeDelivery} alt="" />
      </ContainerSection>
      <ContainerMain>
        <h3>Nossos cafés</h3>
        <article>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </article>
      </ContainerMain>
    </>
  )
}
