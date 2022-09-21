import { v4 as uuidv4 } from 'uuid'

import { createContext, ReactNode, useState } from 'react'

import img1 from '../assets/Image (1).svg'
import img2 from '../assets/Image (2).svg'
import img3 from '../assets/Image (3).svg'
import img4 from '../assets/Image (4).svg'
import img5 from '../assets/Image (5).svg'
import img6 from '../assets/Image (6).svg'
import img7 from '../assets/Image (7).svg'
import img8 from '../assets/Image (8).svg'
import img9 from '../assets/Image (9).svg'
import img10 from '../assets/Image (10).svg'
import img11 from '../assets/Image (11).svg'
import img12 from '../assets/Image (12).svg'
import img13 from '../assets/Image (13).svg'
import img14 from '../assets/Image (14).svg'

export interface TypesCoffee {
  id?: string | any
  title: string
  description: string
  img: string
  tag: string[]
  price: string
  quantity: number
}
export interface TypesContext {
  products: TypesCoffee[]
  cart: never[]
  coffeeAvailables: TypesCoffee[]
  increaseAmountOfCoffee: (id: string) => void
  addProductToCart: (id: string) => void
  decreaseAmountOfCoffee: (id: string) => void
}

interface Context {
  children: ReactNode
}

export const CoffeeContext = createContext({} as TypesContext)

export function CoffeeContextProvider({ children }: Context) {
  const coffeeAvailables: TypesCoffee[] = [
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

  const [products, setProducts] = useState<TypesCoffee[]>(coffeeAvailables)
  const [cart, setCart] = useState<any>([])

  function increaseAmountOfCoffee(id: string) {
    const idx = products.findIndex((coffee) => {
      return coffee.id === id
    })
    const coffees = [...products]
    coffees[idx] = {
      ...coffees[idx],
      quantity: coffees[idx].quantity + 1,
    }
    setProducts(coffees)
  }

  function decreaseAmountOfCoffee(id: string) {
    const idx = products.findIndex((coffee) => {
      return coffee.id === id
    })
    const coffees = [...products]
    coffees[idx] = {
      ...coffees[idx],
      quantity: coffees[idx].quantity - 1,
    }
    setProducts(coffees)
  }

  function addProductToCart(id: string) {
    const objClickado = products.find((coffees) => {
      return coffees.id === id
    })
    setCart([...cart, objClickado])
  }

  return (
    <CoffeeContext.Provider
      value={{
        increaseAmountOfCoffee,
        addProductToCart,
        products,
        coffeeAvailables,
        cart,
        decreaseAmountOfCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
