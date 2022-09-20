import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { TypesCoffee } from '..'
import { ContainerCoffeeCard } from './styles'
import { useId } from 'react'

export function CoffeeCard({
  title,
  description,
  tag,
  price,
  img,
  id,
  quantity,
  increaseAmountOfCoffee,
}: TypesCoffee) {
  const idTag = useId()

  function handleIncreaseAmountOfCoffee() {
    increaseAmountOfCoffee(id)
  }

  return (
    <ContainerCoffeeCard>
      <div>
        <img src={img} alt="" />
        <div>
          {tag.map((tag: string) => {
            return <span key={`${idTag}-${tag}`}>{tag}</span>
          })}
        </div>
      </div>
      <header>
        <h4>{title}</h4>
        <p>{description}</p>
      </header>
      <footer>
        <p>
          R$
          <span>{price}</span>
        </p>
        <nav>
          <div>
            <button>
              <Minus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseAmountOfCoffee}>
              <Plus color={'#8047F8'} weight={'bold'} size={14} />
            </button>
          </div>
          <button>
            <ShoppingCart color="#FFFF" size={16} weight={'fill'} />
          </button>
        </nav>
      </footer>
    </ContainerCoffeeCard>
  )
}
