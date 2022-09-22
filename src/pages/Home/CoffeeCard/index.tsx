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
          <span>{props.price.toString().replace('.', ',')}</span>
        </p>
        <nav>
          <div>
            <button onClick={() => decreaseAmountOfCoffee(props.id)}>
              <Minus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
            <p>{props.quantity}</p>
            <button onClick={() => increaseAmountOfCoffee(props.id)}>
              <Plus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
          </div>
          <button onClick={() => addProductToCart(props.id)}>
            <ShoppingCart color="#FFFF" size={16} weight={'fill'} />
          </button>
        </nav>
      </footer>
    </ContainerCoffeeCard>
  )
}
