export interface NavigationType {
  community: {
    links: {
      label: string
      href: string
    }[]
    socials: {
      key: string
      icon: string
      href: string
    }[]
  }
  items: {
    key: string
    main: {
      classes: string
      iconClasses: string
      label: string
      title: string
      description: string
      href: string
    }
    items: {
      title: string
      description: string
      href: string
    }[]
  }[]
}
