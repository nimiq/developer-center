export enum CardType {
  Normal = 'normal',
  Icon = 'icon',
  IconSmall = 'icon-small',
  Bg = 'icon-bg',
}

interface BaseCard {
  href?: string
  title: string

  // The texts to display
  label?: string
  description?: string
  tags?: Tag[]
  duration?: string
}

type NormalCard = BaseCard & { type?: CardType.Normal, icon: undefined, bgColor?: 'green' | 'blue' }
type IconCard = BaseCard & { icon: string, type?: CardType.Icon, bgColor: undefined }
type IconBgCard = BaseCard & { icon: string, bgColor: 'blue' | 'green', type?: CardType.Bg }
type IconSmallCard = BaseCard & { icon: string, type?: CardType.IconSmall, bgColor: undefined }
export type Card = NormalCard | IconCard | IconBgCard | IconSmallCard

export enum Tag {
  RPC = 'RPC',
  WebClient = 'Web Client',
  Validator = 'Validator',
  Asset = 'Asset',
  NimiqBrandKit = 'Nimiq Brand Kit',
}
