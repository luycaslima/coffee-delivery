import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeLogo from '../../../../assets/coffee.png'
import Background from '../../../../assets/background-intro.png'

import IconTopic from '../../../../components/IconTopic'
import { defaultTheme } from '../../../../styles/themes/default' // TODO dá acesso a essas cores de alguma outra
import {
  BackgroundContainer,
  IntroContainer,
  IntroTextContainer,
} from './styles'

export default function Intro() {
  return (
    <IntroContainer>
      <BackgroundContainer>
        <img src={Background} alt="backgound'effect" />
      </BackgroundContainer>
      <IntroTextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <table>
          <tbody>
            <tr>
              <td>
                <IconTopic
                  icon={<ShoppingCart weight="fill" />}
                  text={'Compra simples e segura'}
                  backgroundColor={defaultTheme['yellow-dark']}
                />
              </td>
              <td>
                <IconTopic
                  icon={<Package weight="fill" />}
                  text="Embalagem mantém o café intacto"
                  backgroundColor={defaultTheme['base-text']}
                />
              </td>
            </tr>
            <tr>
              <td>
                <IconTopic
                  icon={<Timer weight="fill" />}
                  text="Entrega rápida e rastreada"
                  backgroundColor={defaultTheme.yellow}
                />
              </td>
              <td>
                <IconTopic
                  icon={<Coffee weight="fill" />}
                  text="O café chega fresquinho até você"
                  backgroundColor={defaultTheme.purple}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </IntroTextContainer>
      <img src={CoffeeLogo} alt="coffee logo" />
    </IntroContainer>
  )
}
