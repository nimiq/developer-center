export default defineAppConfig({
  // Docus config
  header: {
    title: 'Nimiq Developer Center',
    logo: {
      light: '/logos/nimiq/horizontal.svg',
      dark: '/logos/nimiq/horizontal-white.svg',
      alt: 'Nimiq',
    },
  },
  toc: { title: 'On this page' },
  github: {
    url: 'https://github.com/nimiq/developer-center',
    branch: 'main',
  },
  assistant: {
    floatingInput: true,
    explainWithAi: true,
  },

  // Nuxt UI — colors overridden via CSS variables in main.css
  ui: {
    // ── Button ──
    // nq-pill: rounded-full, bold, gradient bg, lift-on-hover
    // nq-pill-secondary: outline style
    // nq-pill-tertiary: ghost outline
    button: {
      slots: {
        base: 'font-bold rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0,0,1)]',
      },
      variants: {
        variant: {
          solid: {
            base: 'shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.15)] hover:shadow-[0_1rem_2.5rem_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:shadow-[0_0.2rem_0.3rem_rgba(0,0,0,0.2)] active:translate-y-px active:duration-200',
          },
          outline: {
            base: 'ring-[1.5px] hover:bg-elevated',
          },
          ghost: {
            base: 'hover:bg-accented',
          },
          soft: {
            base: 'hover:-translate-y-0.5',
          },
        },
        size: {
          xs: { base: 'px-3 py-1 text-xs gap-1' },
          sm: { base: 'px-3.5 py-1.5 text-xs gap-1.5' },
          md: { base: 'px-4 py-2 text-sm gap-1.5' },
          lg: { base: 'px-5 py-2.5 text-sm gap-2' },
          xl: { base: 'px-8 py-5 text-base gap-2 tracking-wide uppercase min-w-[12.5rem]' },
        },
      },
    },

    // ── Card ──
    // nq-card: subtle bg, 0.5rem radius, 1.5rem padding, thin outline
    card: {
      slots: {
        root: 'rounded-lg overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.25,0,0,1)]',
        header: 'p-6',
        body: 'p-6',
        footer: 'p-6',
      },
      variants: {
        variant: {
          outline: {
            root: 'bg-default ring-[1.5px] ring-[color-mix(in_oklch,var(--ui-color-neutral-950)_6%,transparent)] dark:ring-[color-mix(in_oklch,var(--ui-color-neutral-50)_6%,transparent)]',
          },
          soft: {
            root: 'bg-muted',
          },
        },
      },
    },

    // ── PageCard ──
    // nq-hoverable: lift on hover, shadow appears, smooth transitions
    pageCard: {
      slots: {
        root: 'rounded-lg transition-all duration-300 ease-[cubic-bezier(0.25,0,0,1)]',
        container: 'p-6',
        leadingIcon: 'size-6 text-primary',
        title: 'text-base font-bold text-highlighted',
        description: 'text-sm leading-relaxed',
      },
      variants: {
        variant: {
          outline: {
            root: 'bg-[var(--ui-color-neutral-50)] dark:bg-[var(--ui-color-neutral-900)] ring-[1.5px] ring-[color-mix(in_oklch,var(--ui-color-neutral-950)_4%,transparent)] dark:ring-[color-mix(in_oklch,var(--ui-color-neutral-50)_4%,transparent)]',
          },
        },
        to: {
          true: {
            root: 'hover:-translate-y-1.5 hover:shadow-nq hover:bg-white dark:hover:bg-white hover:ring-[color-mix(in_oklch,var(--ui-color-neutral-950)_2%,transparent)]',
            title: 'group-hover:text-darkblue-950',
            description: 'group-hover:text-darkblue-700',
            leadingIcon: 'group-hover:text-[var(--ui-color-primary-600)]',
          },
        },
      },
    },

    // ── PageHero ──
    pageHero: {
      slots: {
        root: '',
        container: 'py-20 sm:py-28 lg:py-36',
        title: 'text-5xl sm:text-7xl tracking-tight font-extrabold text-highlighted',
        description: 'text-lg sm:text-xl text-muted leading-relaxed',
        links: 'flex flex-wrap gap-4',
      },
    },

    // ── PageSection ──
    pageSection: {
      slots: {
        root: '',
        container: 'py-12 sm:py-20 lg:py-24',
        headline: 'mb-3',
        title: 'text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-highlighted',
        description: 'text-base sm:text-lg text-muted leading-relaxed',
        features: 'grid',
      },
      variants: {
        orientation: {
          vertical: {
            features: 'sm:grid-cols-2 lg:grid-cols-3 gap-6',
          },
        },
      },
    },

    // ── PageGrid ──
    pageGrid: {
      base: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
    },

    // ── PageColumns ──
    pageColumns: {
      base: 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 *:break-inside-avoid-column',
    },

    // ── PageFeature ──
    // Maps to nq-hoverable items inside sections
    pageFeature: {
      slots: {
        root: 'rounded-lg',
        leadingIcon: 'size-5 text-primary',
        title: 'text-base font-bold text-highlighted',
        description: 'text-sm text-muted leading-relaxed',
      },
    },

    // ── Header ──
    header: {
      slots: {
        root: 'bg-default/80 backdrop-blur-lg border-b border-[color-mix(in_oklch,var(--ui-color-neutral-950)_6%,transparent)] dark:border-[color-mix(in_oklch,var(--ui-color-neutral-50)_6%,transparent)]',
      },
    },

    // ── NavigationMenu ──
    // Sidebar links with Nimiq styling
    navigationMenu: {
      slots: {
        link: 'rounded-lg font-medium transition-all duration-200 ease-[cubic-bezier(0.25,0,0,1)]',
        linkLeadingIcon: 'size-5 text-muted group-data-[active]:text-primary',
      },
    },

    // ── ContentSearch ──
    contentSearch: {
      slots: {
        input: 'font-sans',
      },
    },
  },
})
