import {
  CompleteYourOrder,
  Container,
  ContainerMain,
  SelectedProductsAside,
} from './styles'

import { CoffeeSelected } from './CoffeeSelected'
import { FormDelivery } from './FormDelivery'

export function Checkout() {
  return (
    <>
      <ContainerMain>
        <CompleteYourOrder>
          <h3>Complete seu pedido</h3>

          <FormDelivery />
        </CompleteYourOrder>
        <Container>
          <h3>Cafés selecionados</h3>
          <SelectedProductsAside>
            <CoffeeSelected />
          </SelectedProductsAside>
        </Container>
      </ContainerMain>
    </>
  )
}
