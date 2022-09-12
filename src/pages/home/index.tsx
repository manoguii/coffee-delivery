import imagemCoffe from '../../assets/imagemCoffe.svg'

export function Home() {
  return (
    <section>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
      </div>
      <div>
        <p>
          <img src="" alt="" />
          Compra simples e segura
        </p>
        <p>
          <img src="" alt="" />
          Entrega rápida e rastreada
        </p>
        <p>
          <img src="" alt="" />
          Embalagem mantém o café intacto
        </p>
        <p>
          <img src="" alt="" />O café chega fresquinho até você
        </p>
      </div>
      <img src={imagemCoffe} alt="" />
    </section>
  )
}
