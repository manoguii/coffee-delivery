import { Minus, Plus, Trash } from 'phosphor-react'
import { Container, NavButtonContainer } from './styles'
import Image from '../../../assets/Image (1).svg'

export function CoffeeSelected() {
  return (
    <Container>
      <div>
        <img src={Image} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <NavButtonContainer>
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
              <Trash color="#8047F8" size={16} weight={'regular'} />
              Remover
            </button>
          </NavButtonContainer>
        </div>
      </div>
      <footer>
        <span>R$ 9,90</span>
      </footer>
    </Container>
  )
}
