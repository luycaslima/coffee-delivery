import { Trash } from 'phosphor-react'
import { SelectedCoffeesContainer } from './styles'

export default function Checkout() {
  return (
    <div>
      <h2>Cafés selecionados</h2>
      <SelectedCoffeesContainer>
        <div>
          <img src="" alt="Coffee image" />
          <main>
            <header>
              Café Tradicional <span> R$ 9,90</span>
            </header>
            <main>
              <input type="number" placeholder="1" step={1} min={0} />
              <button>
                <Trash /> Remover
              </button>
            </main>
          </main>
        </div>
        <hr />
        <div>
          <button>CONFIRMAR PEDIDO</button>
        </div>
      </SelectedCoffeesContainer>
    </div>
  )
}
