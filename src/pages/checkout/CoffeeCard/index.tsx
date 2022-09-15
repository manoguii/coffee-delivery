import { PedidoContainer } from './styles'
import ImgCoffee from '../../../assets/Image.svg'
import { ButtonNumberCoffee } from '../../home/CardCoffee/styles'
import { Minus, Plus } from 'phosphor-react'
export function CardPedido() {
  return (
    <PedidoContainer>
      <main>
        <img src={ImgCoffee} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <div>
            <ButtonNumberCoffee>
              <Minus size={18} color="#8047F8" weight="bold" />
              <span>1</span>
              <Plus size={18} color="#8047F8" weight="bold" />
            </ButtonNumberCoffee>
            <button>remover</button>
          </div>
        </div>
      </main>
      <span>R$ 9,90</span>
    </PedidoContainer>
  )
}
