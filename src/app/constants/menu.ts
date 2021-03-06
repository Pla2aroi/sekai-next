import { FunctionComponent, SVGProps } from 'react'

import { Calendar } from '../../core/components/icons/calendar'
import { Collection } from '../../core/components/icons/collection'
import { Home } from '../../core/components/icons/home'
import { InformationCircle } from '../../core/components/icons/informationCircle'
import { MusicNote } from '../../core/components/icons/musicNote'
import { User } from '../../core/components/icons/user'

export interface IMenu {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  link: string
  name: string
  match: string[]
}

export const menus: IMenu[] = [
  {
    icon: Home,
    link: '/',
    name: 'Home',
    match: ['/'],
  },
  {
    icon: MusicNote,
    link: '/musics',
    name: 'Musics',
    match: ['/musics/[[...page]]', '/music/[id]'],
  },
  {
    icon: User,
    link: '/characters',
    name: 'Characters',
    match: ['/characters', '/character/[id]'],
  },
  {
    icon: Collection,
    link: '/cards',
    name: 'Cards',
    match: ['/cards', '/card/[id]'],
  },
  {
    icon: Calendar,
    link: '/events',
    name: 'Events',
    match: ['/events', '/event/[id]'],
  },
  {
    icon: InformationCircle,
    link: '/about',
    name: 'About',
    match: ['/about'],
  },
]
