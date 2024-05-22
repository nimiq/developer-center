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

type Color = 'green' | 'blue' | 'gold' | 'purple' | 'red'
type NormalCard = BaseCard & { type?: CardType.Normal, icon: undefined, bgColor?: Color }
type IconCard = BaseCard & { icon: string, type?: CardType.Icon, bgColor: undefined }
type IconBgCard = BaseCard & { icon: string, bgColor: Color, type?: CardType.Bg }
type IconSmallCard = BaseCard & { icon: string, type?: CardType.IconSmall, bgColor: undefined }
export type Card = NormalCard | IconCard | IconBgCard | IconSmallCard

export enum Tag {
  RPC = 'RPC',
  WebClient = 'Web Client',
  PrivateNode = 'Private Node',
  Validator = 'Validator',
  Asset = 'Asset',
  NimiqBrandKit = 'Nimiq Brand Kit',
}
