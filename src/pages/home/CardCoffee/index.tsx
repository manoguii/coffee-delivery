import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import imageCardCoffee from '../../../assets/imageCardCoffee.svg'
import {
  ButtonAddCart,
  ButtonNumberCoffee,
  ContainerCardCoffee,
  ContainerPrice,
} from './styles'

export function CardCoffee() {
  return (
    <ContainerCardCoffee>
      <img src={imageCardCoffee} alt="" />
      <span>Tradicional</span>
      <header>
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </header>
      <ContainerPrice>
        <label>
          R$ <p>9,90</p>
        </label>
        <li>
          <ButtonNumberCoffee>
            <Minus size={18} color="#8047F8" weight="bold" />
            <span>1</span>
            <Plus size={18} color="#8047F8" weight="bold" />
          </ButtonNumberCoffee>
          <ButtonAddCart>
            <ShoppingCartSimple size={25} color="#ffff" weight="fill" />
          </ButtonAddCart>
        </li>
      </ContainerPrice>
    </ContainerCardCoffee>
  )
}
