export interface Card {
  icon?: string
  label?: string
  layout?: 'sm' | 'square' | 'lg'
  title: string
  description?: string
  href: string
  'bg-color'?: 'gray' | 'blue' | 'green'
  centered: boolean
  hasColors: boolean
  tag?: Tag
  duration: string
}

export enum Tag {
  RPC = 'RPC',
  WebClient = 'Web Client'
}
