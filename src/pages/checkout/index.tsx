import { CardPedido } from './CoffeeCard'
import {
  AsideContainer,
  Container,
  FooterContainer,
  FormCheckout,
  InputFormCheckoutBairro,
  InputFormCheckoutCep,
  InputFormCheckoutCidade,
  InputFormCheckoutComplemento,
  InputFormCheckoutNumero,
  InputFormCheckoutRua,
  InputFormCheckoutUf,
  LiPagamentoCheckoutCredito,
  LiPagamentoCheckoutDebito,
  LiPagamentoCheckoutDinheiro,
  PagamentoCheckout,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <div>
        <FormCheckout action="submit">
          <div>
            <h1>Endereço de Entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <main>
            <InputFormCheckoutCep type="number" placeholder="CEP" />
            <InputFormCheckoutRua type="text" placeholder="Rua" />
            <InputFormCheckoutNumero type="number" placeholder="Numero" />
            <InputFormCheckoutComplemento
              type="text"
              placeholder="Complemento"
            />
            <InputFormCheckoutBairro type="text" placeholder="Bairro" />
            <InputFormCheckoutCidade type="text" placeholder="Cidade" />
            <InputFormCheckoutUf type="text" placeholder="UF" />
          </main>
        </FormCheckout>
        <PagamentoCheckout>
          <div>
            <h1>Pagamento</h1>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <ul>
            <LiPagamentoCheckoutCredito>
              <p>Cartão de crédito</p>
            </LiPagamentoCheckoutCredito>
            <LiPagamentoCheckoutDebito>
              <p>cartão de débito</p>
            </LiPagamentoCheckoutDebito>
            <LiPagamentoCheckoutDinheiro>
              <p>dinheiro</p>
            </LiPagamentoCheckoutDinheiro>
          </ul>
        </PagamentoCheckout>
      </div>
      <AsideContainer>
        <CardPedido />
        <FooterContainer>
          <div>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div>
            <p>Total</p>
            <span>R$ 33,20</span>
          </div>
          <button>confirmar pedido</button>
        </FooterContainer>
      </AsideContainer>
    </Container>
  )
}
