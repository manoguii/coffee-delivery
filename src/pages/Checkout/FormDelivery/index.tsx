import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CoffeeContext,
  TypesForm,
} from '../../../contexts/CoffeeContextProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PaymentContainer, BaseInputFormCheckout } from '../styles'
import { useContext, useEffect, useState } from 'react'
import * as zod from 'zod'
import { configForm } from './config'

const validationSchema = zod.object({
  cep: zod.string().min(1),
  numero: zod.string().min(1),
  rua: zod.string().min(1),
  complemento: zod.string().min(1),
  uf: zod.string().min(1),
  cidade: zod.string().min(1),
  bairro: zod.string().min(1),
})

interface InputProps {
  type: string
  placeholder: string
  maxLength: number
  minLength: number
  name: string
  id: string
}

type TypesFormProps = TypesForm & {
  name: string
}

export function FormDelivery() {
  const { handleCreateNewForm } = useContext(CoffeeContext)

  const [config, setConfig] = useState<InputProps[]>([])

  function addConfig(cfg: InputProps[]) {
    setConfig(cfg)
  }

  useEffect(() => {
    addConfig(configForm)
  }, [])

  const { register, handleSubmit } = useForm<TypesFormProps>({
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
    <form onSubmit={handleSubmit(handleCreateNewForm)}>
      <section>
        <header>
          <MapPinLine size={20} color="#C47F17" weight="bold" />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>
        {config.map((input: InputProps) => {
          return (
            <BaseInputFormCheckout
              key={input.id}
              type={input.type}
              placeholder={input.placeholder}
              maxLength={input.maxLength}
              minLength={input.minLength}
              {...register(input.name)}
            />
          )
        })}
      </section>

      <PaymentContainer>
        <header>
          <CurrencyDollar size={20} color="#8047F8" weight="bold" />
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
  )
}
