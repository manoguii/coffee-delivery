import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import imageCardCoffee from '../../../assets/imageCardCoffee.svg'
import { ContainerCoffeeCard } from './styles'

export function CoffeeCard() {
  return (
    <ContainerCoffeeCard>
      <div>
        <img src={imageCardCoffee} alt="" />
        <span>Tradicional</span>
      </div>
      <header>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </header>
      <footer>
        <p>
          R$
          <span>9,90</span>
        </p>
        <nav>
          <div>
            <button>
              <Minus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
            <p>1</p>
            <button>
              <Plus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
          </div>
          <button>
            <ShoppingCart color="#FFFF" size={16} weight={'fill'} />
          </button>
        </nav>
      </footer>
    </ContainerCoffeeCard>
  )
}
