import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartEmptyContainer } from './styles'

export function CartEmpty() {
  return (
    <CartEmptyContainer>
      <ShoppingCart size={100} color="#8047F8" weight="thin" />
      <h4>Seu carrinho está vazio</h4>
      <span>
        Adicione seu café clicando no botão de “Carrinho” na página de produtos.
      </span>
      <NavLink to={'/'}>Voltar para pagina de produtos</NavLink>
    </CartEmptyContainer>
  )
}
