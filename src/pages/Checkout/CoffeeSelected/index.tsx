import { Minus, Plus, Trash } from 'phosphor-react'
import { Container, NavButtonContainer } from './styles'

export function CoffeeSelected() {
  return (
    <Container>
      <div>
        <img alt="" />
        <div>
          <p></p>
          <NavButtonContainer>
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
              <Trash color="#8047F8" size={16} weight={'regular'} />
              Remover
            </button>
          </NavButtonContainer>
        </div>
      </div>
      <footer>
        <span>R$</span>
      </footer>
    </Container>
  )
}
