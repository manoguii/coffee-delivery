import {
  CompleteYourOrder,
  ContainerAside,
  ContainerMain,
  InputCheckoutBairro,
  InputCheckoutCep,
  InputCheckoutCidade,
  InputCheckoutComplemento,
  InputCheckoutNumero,
  InputCheckoutRua,
  InputCheckoutUf,
  PaymentContainer,
  SelectedProducts,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CoffeeSelected } from './CoffeeSelected'
import { useContext } from 'react'
import {
  CoffeeContext,
  TypesCoffee,
} from '../../contexts/CoffeeContextProvider'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function Checkout() {
  const { cart } = useContext(CoffeeContext)
  const { register, handleSubmit, watch } = useForm()

  const sumCart = cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity * currentValue.price,
    0,
  )
  const sumQuantity = cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0,
  )
  const delivery = sumQuantity < 5 ? `R$ ${3.5}` : 'Frete Grátis'
  const total = delivery === 'Frete Grátis' ? sumCart : sumCart + 3.5

  function handleCreateNewForm(data) {
    console.log(data)
  }
  return (
    <>
      <ContainerMain>
        <CompleteYourOrder>
          <h3>Complete seu pedido</h3>
          <form onSubmit={handleSubmit(handleCreateNewForm)}>
            <header>
              <MapPinLine size={20} color="#C47F17" weight="bold" />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <section>
              <InputCheckoutCep
                type=""
                placeholder="cep"
                {...register('cep')}
              />
              <InputCheckoutRua
                type="text"
                placeholder="Rua"
                {...register('rua')}
              />
              <div>
                <InputCheckoutNumero
                  type="number"
                  placeholder="Numero"
                  {...register('numero')}
                />
                <InputCheckoutComplemento
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </div>
              <div>
                <InputCheckoutBairro
                  type="text"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <InputCheckoutCidade
                  type="text"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <InputCheckoutUf
                  type="text"
                  placeholder="UF"
                  {...register('uf')}
                />
              </div>
              <button type="submit">CONFIRMAR</button>
            </section>
          </form>
          <PaymentContainer>
            <header>
              <CurrencyDollar size={20} color="#8047F8" weight="bold" />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <nav>
              <button>
                <CreditCard size={14} color="#8047F8" weight="bold" />
                <p>Cartão de crédito</p>
              </button>
              <button>
                <Bank size={14} color="#8047F8" weight="bold" />
                <p>Cartão de débito</p>
              </button>
              <button>
                <Money size={14} color="#8047F8" weight="bold" />
                <p>Dinheiro</p>
              </button>
            </nav>
          </PaymentContainer>
        </CompleteYourOrder>
        <ContainerAside>
          <h3>Cafés selecionados</h3>
          <SelectedProducts>
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
            <ul>
              <li>
                <p>Total de itens</p>
                <span>R$ {sumCart.toFixed(2)}</span>
              </li>
              <li>
                <p>Entrega</p>
                <span>{delivery}</span>
              </li>
              <li>
                <p>Total</p>
                <span>R$ {total.toFixed(2)}</span>
              </li>
            </ul>
            <NavLink to="/success" title="Success">
              confirmar pedido
              <button type="submit"></button>
            </NavLink>
          </SelectedProducts>
        </ContainerAside>
      </ContainerMain>
    </>
  )
}
