export enum CardType {
  Normal = 'normal',
  Icon = 'icon',
  Bg = 'icon-bg',
}

interface BaseCard {
  href: string
  title: string

  // The texts to display
  label?: string
  description?: string
  tags?: Tag[]
  duration?: string
}

type NormalCard = BaseCard & { type: CardType.Normal, icon: undefined, bgColor?: 'green' | 'blue' }
type IconCard = BaseCard & { icon: string, type: CardType.Icon, bgColor: undefined }
type IconBgCard = BaseCard & { icon: string, bgColor: 'blue' | 'green', type: CardType.Bg }
export type Card = NormalCard | IconCard | IconBgCard

export enum Tag {
  RPC = 'RPC',
  WebClient = 'Web Client',
}
