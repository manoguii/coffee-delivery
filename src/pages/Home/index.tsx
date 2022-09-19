import img1 from '../../assets/Image (1).svg'
import img2 from '../../assets/Image (2).svg'
import img3 from '../../assets/Image (3).svg'
import img4 from '../../assets/Image (4).svg'
import img5 from '../../assets/Image (5).svg'
import img6 from '../../assets/Image (6).svg'
import img7 from '../../assets/Image (7).svg'
import img8 from '../../assets/Image (8).svg'
import img9 from '../../assets/Image (9).svg'
import img10 from '../../assets/Image (10).svg'
import img11 from '../../assets/Image (11).svg'
import img12 from '../../assets/Image (12).svg'
import img13 from '../../assets/Image (13).svg'
import img14 from '../../assets/Image (14).svg'

import { v4 as uuidv4 } from 'uuid'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useState } from 'react'
import imageCoffeeDelivery from '../../assets/imagemCoffe.svg'
import { CoffeeCard } from './CoffeeCard'
import {
  CartIcon,
  CoffeetIcon,
  ContainerMain,
  ContainerSection,
  PackingIcon,
  TimerIcon,
} from './styles'

export type TypesCoffee = {
  id?: string | any
  title: string
  description: string
  img: string
  tag: string[]
  price: string
  quantity: number
}
export type TypesProducts = [TypesCoffee]

export function Home() {
  const coffeeAvailables = [
    {
      id: uuidv4(),
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tag: ['Tradicional'],
      img: img1,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      tag: ['Tradicional'],
      img: img2,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tag: ['Tradicional'],
      img: img3,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tag: ['Tradicional', 'gelado'],
      img: img4,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tag: ['Tradicional', 'com leite'],
      img: img5,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tag: ['Tradicional', 'com leite'],
      img: img6,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tag: ['Tradicional', 'com leite'],
      img: img7,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tag: ['Tradicional', 'com leite'],
      img: img8,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tag: ['Tradicional', 'com leite'],
      img: img9,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tag: ['Tradicional', 'com leite'],
      img: img10,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tag: ['especial', 'alcoólico', 'gelado'],
      img: img11,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tag: ['especial'],
      img: img12,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tag: ['especial'],
      img: img13,
      price: '9,90',
      quantity: 0,
    },
    {
      id: uuidv4(),
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tag: ['especial', 'alcoólico'],
      img: img14,
      price: '9,90',
      quantity: 0,
    },
  ]

  const [products, setProducts] = useState(coffeeAvailables)

  return (
    <>
      <ContainerSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <CartIcon>
                <ShoppingCart size={16} color={'#FFFF'} weight={'fill'} />
              </CartIcon>
              <p>Compra simples e segura</p>
            </li>
            <li>
              <PackingIcon>
                <Package size={16} color={'#FFFF'} weight={'fill'} />
              </PackingIcon>
              <p>Embalagem mantém o café intacto</p>
            </li>
            <li>
              <TimerIcon>
                <Timer size={16} color={'#FFFF'} weight={'fill'} />
              </TimerIcon>
              <p>Entrega rápida e rastreada</p>
            </li>
            <li>
              <CoffeetIcon>
                <Coffee size={16} color={'#FFFF'} weight={'fill'} />
              </CoffeetIcon>
              <p>O café chega fresquinho até você</p>
            </li>
          </ul>
        </div>
        <img src={imageCoffeeDelivery} alt="" />
      </ContainerSection>
      <ContainerMain>
        <h3>Nossos cafés</h3>
        <article>
          {products.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                title={coffee.title}
                description={coffee.description}
                tag={coffee.tag}
                price={coffee.price}
                img={coffee.img}
                quantity={coffee.quantity}
              />
            )
          })}
        </article>
      </ContainerMain>
    </>
  )
}
