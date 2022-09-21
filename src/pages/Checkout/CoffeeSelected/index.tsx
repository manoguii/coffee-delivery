import { Minus, Plus, Trash } from 'phosphor-react'
import { Container, NavButtonContainer } from './styles'
import { TypesCoffee } from '../../../contexts/CoffeeContextProvider'

export function CoffeeSelected(props: TypesCoffee) {
  return (
    <Container>
      <div>
        <img src={props.img} alt="" />
        <div>
          <p>{props.title}</p>
          <NavButtonContainer>
            <div>
              <button>
                <Minus color={'#8047F8'} weight={'bold'} size={14} />
              </button>
              <p>{props.quantity}</p>
              <button>
                <Plus color={'#8047F8'} weight={'bold'} size={14} />
              </button>
            </div>
            <button>
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
