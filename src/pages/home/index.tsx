import imagemCoffe from '../../assets/imagemCoffe.svg'
import iconCarrinho from '../../assets/iconCarrinho.svg'
import iconCoffe from '../../assets/iconCoffe.svg'
import iconEmbalagem from '../../assets/iconEmbalagem.svg'
import iconTimer from '../../assets/iconTimer.svg'
import {
  ContainerMain,
  ItensContainer,
  SectionContainer,
  TitleContainer,
} from './styles'
import { CardCoffee } from './CardCoffee'

export function Home() {
  return (
    <>
      <SectionContainer>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>
          <ItensContainer>
            <p>
              <img src={iconCarrinho} alt="" />
              Compra simples e segura
            </p>
            <p>
              <img src={iconEmbalagem} alt="" />
              Embalagem mantém o café intacto
            </p>
            <p>
              <img src={iconTimer} alt="" />
              Entrega rápida e rastreada
            </p>
            <p>
              <img src={iconCoffe} alt="" />O café chega fresquinho até você
            </p>
          </ItensContainer>
        </div>
        <img src={imagemCoffe} alt="" />
      </SectionContainer>
      <ContainerMain>
        <h1>Nossos Cafés</h1>
        <div>
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
        </div>
      </ContainerMain>
    </>
  )
}
