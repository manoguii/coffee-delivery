import { Minus, Plus, Trash } from 'phosphor-react'
import { Container, NavButtonContainer } from './styles'
import {
  CoffeeContext,
  TypesCoffee,
} from '../../../contexts/CoffeeContextProvider'
import { useContext } from 'react'

export function CoffeeSelected(props: TypesCoffee) {
  const { deleteProductFromCart, addQuantityToCart, removeQuantityToCart } =
    useContext(CoffeeContext)

  return (
    <Container>
      <div>
        <img src={props.img} alt="" />
        <div>
          <p>{props.title}</p>
          <NavButtonContainer>
            <div>
              <button onClick={() => removeQuantityToCart(props.id)}>
                <Minus color={'#8047F8'} weight={'bold'} size={14} />
              </button>
              <p>{props.quantity}</p>
              <button onClick={() => addQuantityToCart(props.id)}>
                <Plus color={'#8047F8'} weight={'bold'} size={14} />
              </button>
            </div>
            <button onClick={() => deleteProductFromCart(props.id)}>
              <Trash color="#8047F8" size={16} weight={'regular'} />
              Remover
            </button>
          </NavButtonContainer>
        </div>
      </div>
      <footer>
        <span>R$ {props.price}</span>
      </footer>
    </Container>
  )
}
