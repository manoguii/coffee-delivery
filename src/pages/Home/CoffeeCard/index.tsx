import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ContainerCoffeeCard } from './styles'
import { useContext, useId } from 'react'
import {
  CoffeeContext,
  TypesCoffee,
} from '../../../contexts/CoffeeContextProvider'

export function CoffeeCard(props: TypesCoffee) {
  const idTag = useId()
  const { increaseAmountOfCoffee, addProductToCart, decreaseAmountOfCoffee } =
    useContext(CoffeeContext)

  function handleIncreaseAmountOfCoffee() {
    increaseAmountOfCoffee(props.id)
  }

  function handleAddProductToCart() {
    addProductToCart(props.id)
  }

  function handleDecreaseAmountOfCoffee() {
    decreaseAmountOfCoffee(props.id)
  }

  return (
    <ContainerCoffeeCard>
      <div>
        <img src={props.img} alt="" />
        <div>
          {props.tag.map((tag: string) => {
            return <span key={`${idTag}-${tag}`}>{tag}</span>
          })}
        </div>
      </div>
      <header>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </header>
      <footer>
        <p>
          R$
          <span>{props.price}</span>
        </p>
        <nav>
          <div>
            <button onClick={handleDecreaseAmountOfCoffee}>
              <Minus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
            <p>{props.quantity}</p>
            <button onClick={handleIncreaseAmountOfCoffee}>
              <Plus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
          </div>
          <button onClick={handleAddProductToCart}>
            <ShoppingCart color="#FFFF" size={16} weight={'fill'} />
          </button>
        </nav>
      </footer>
    </ContainerCoffeeCard>
  )
}
