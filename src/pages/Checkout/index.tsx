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
  TypesForm,
} from '../../contexts/CoffeeContextProvider'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { InfoPayment } from './InfoPayment'
import { CartEmpty } from './CartEmpty'

const validationSchema = zod.object({
  cep: zod.string().min(1),
  numero: zod.string().min(1),
  rua: zod.string().min(1),
  complemento: zod.string().min(1),
  uf: zod.string().min(1),
  cidade: zod.string().min(1),
  bairro: zod.string().min(1),
})

// export type FormAdress = zod.infer<typeof validationSchema>

export function Checkout() {
  const { cart, handleCreateNewForm } = useContext(CoffeeContext)

  const { register, handleSubmit } = useForm<TypesForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      complemento: '',
      numero: '',
      uf: '',
      cidade: '',
      bairro: '',
    },
  })

  return (
    <>
      <ContainerMain>
        <CompleteYourOrder>
          <h3>Complete seu pedido</h3>
          <form onSubmit={handleSubmit(handleCreateNewForm)}>
            <section>
              <header>
                <MapPinLine size={20} color="#C47F17" weight="bold" />
                <div>
                  <h4>Endereço de Entrega</h4>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>
              <InputCheckoutCep
                type=""
                placeholder="cep"
                maxLength={9}
                {...register('cep')}
              />
              <InputCheckoutRua
                type="text"
                placeholder="Rua"
                minLength={1}
                maxLength={40}
                {...register('rua')}
              />
              <div>
                <InputCheckoutNumero
                  type="text"
                  placeholder="Numero"
                  minLength={1}
                  maxLength={6}
                  {...register('numero')}
                />
                <InputCheckoutComplemento
                  type="text"
                  placeholder="Complemento"
                  minLength={1}
                  maxLength={20}
                  {...register('complemento')}
                />
              </div>
              <div>
                <InputCheckoutBairro
                  type="text"
                  placeholder="Bairro"
                  minLength={1}
                  maxLength={25}
                  {...register('bairro')}
                />
                <InputCheckoutCidade
                  type="text"
                  placeholder="Cidade"
                  minLength={1}
                  maxLength={15}
                  {...register('cidade')}
                />
                <InputCheckoutUf
                  type="text"
                  placeholder="UF"
                  minLength={1}
                  maxLength={3}
                  {...register('uf')}
                />
              </div>
            </section>

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
          </form>
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
            {cart.length > 0 ? <InfoPayment /> : <CartEmpty />}
          </SelectedProducts>
        </ContainerAside>
      </ContainerMain>
    </>
  )
}
