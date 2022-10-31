import {
  CompleteYourOrder,
  Container,
  ContainerMain,
  SelectedProductsAside,
} from './styles'

import { CoffeeSelected } from './CoffeeSelected'
import { useContext } from 'react'
import {
  CoffeeContext,
  TypesCoffee,
} from '../../contexts/CoffeeContextProvider'
import { InfoPayment } from './InfoPayment'
import { CartEmpty } from './CartEmpty'
import { FormDelivery } from './FormDelivery'

export function Checkout() {
  const { cart } = useContext(CoffeeContext)

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
            {cart.map((coffee: TypesCoffee) => {
              return (
                <CoffeeSelected
                  key={coffee.id}
                  id={coffee.id}
                  img={coffee.img}
                  title={coffee.title}
                  price={coffee.price}
                  quantity={coffee.quantity}
                  description={coffee.description}
                  tag={coffee.tag}
                />
              )
            })}
            {cart.length > 0 ? <InfoPayment /> : <CartEmpty />}
          </SelectedProductsAside>
        </Container>
      </ContainerMain>
    </>
  )
}
