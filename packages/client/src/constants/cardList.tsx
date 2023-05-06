import { CardType } from '../pages/game/types'
import guardian from '../assets/images/1-light.svg'
import priest from '../assets/images/2-light.svg'
import baron from '../assets/images/3-light.svg'
import handmaid from '../assets/images/4-light.png'
import prince from '../assets/images/5-light.png'
import king from '../assets/images/6-light.png'
import countess from '../assets/images/7-light.png'
import princess from '../assets/images/8-light.png'

export const cardList: CardType[] = [
  {
    value: 1,
    count: 5,
    title: '1: Стражница',
    imgSrc: () => guardian,
    text: 'Выберите соперника и назовите значение карты, отличное от 1. Если у этого игрока на руке есть карта с названным значением, он выбывает из раунда.'
  },
  {
    value: 2,
    count: 2,
    title: '2: Священник',
    imgSrc: (theme = 'light') => priest,
    text: 'Можете посмотреть карту соперника.'
  },
  {
    value: 3,
    count: 2,
    title: '3: Барон',
    imgSrc: (theme = 'light') => baron,
    text: 'Сравните с соперником карты на руках. Обладатель карты с меньшим значением оказывается выбывает из раунда.'
  },
  {
    value: 4,
    count: 2,
    title: '4: Служанка',
    imgSrc: (theme = 'light') => handmaid,
    text: 'Вы до начала своего следующего хода защищены от всех свойств карт соперников.'
  },
  {
    value: 5,
    count: 2,
    title: '5: Принц',
    imgSrc: (theme = 'light') => prince,
    text: 'Противник сбрасывает с руки карту, не применяя её свойство, и берёт новую.'
  },
  {
    value: 6,
    count: 1,
    title: '6: Король',
    imgSrc: (theme = 'light') => king,
    text: 'Обменяйтесь с ним картами с соперником.'
  },
  {
    value: 7,
    count: 1,
    title: '7: Графиня',
    imgSrc: (theme = 'light') => countess,
    text: 'Вы должны сбросить эту карту, если она оказалась у вас на руках вместе с королем или принцем.'
  },
  {
    value: 8,
    count: 1,
    title: '8: Принцесса',
    imgSrc: (theme = 'light') => princess,
    text: 'Если вы сбрасываете эту карту, то выбываете из раунда.'
  }
]
