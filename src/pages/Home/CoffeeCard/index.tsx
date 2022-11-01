import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ContainerCoffeeCard } from './styles'

export function CoffeeCard() {
  return (
    <ContainerCoffeeCard>
      <div>
        <img alt="" />
        <div>
          <span></span>
        </div>
      </div>
      <header>
        <h4></h4>
        <p></p>
      </header>
      <footer>
        <p>
          R$
          <span></span>
        </p>
        <nav>
          <div>
            <button>
              <Minus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
            <p></p>
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
