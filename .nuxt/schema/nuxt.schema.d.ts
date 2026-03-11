export interface NuxtCustomSchema {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure Nuxt Icon module preferences.
   * 
   * 
   * @studioIcon material-symbols:star
  */
  icon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size.
    * 
    * 
    * @studioIcon material-symbols:format-size-rounded
   */
   size?: string | undefined,

   /**
    * CSS Class
    * 
    * Set the default CSS class.
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:css
   */
   class?: string,

   /**
    * Default Attributes
    * 
    * Attributes applied to every icon component.
    * 
    * @default { "aria-hidden": true }
    * 
    * 
    * @studioIcon material-symbols:settings
   */
   attrs?: Record<string, string | number | boolean>,

   /**
    * Default Rendering Mode
    * 
    * Set the default rendering mode for the icon component
    * 
    * @default "css"
    * 
    * @enum css,svg
    * 
    * @studioIcon material-symbols:move-down-rounded
   */
   mode?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studioIcon material-symbols:star-rounded
   */
   aliases?: { [alias: string]: string },

   /**
    * CSS Selector Prefix
    * 
    * Set the default CSS selector prefix.
    * 
    * @default "i-"
    * 
    * @studioIcon material-symbols:format-textdirection-l-to-r
   */
   cssSelectorPrefix?: string,

   /**
    * CSS Layer Name
    * 
    * Set the default CSS `@layer` name.
    * 
    * 
    * @studioIcon material-symbols:layers
   */
   cssLayer?: string | undefined,

   /**
    * Use CSS `:where()` Pseudo Selector
    * 
    * Use CSS `:where()` pseudo selector to reduce specificity.
    * 
    * @default true
    * 
    * @studioIcon material-symbols:low-priority
   */
   cssWherePseudo?: boolean,

   /**
    * Icon Collections
    * 
    * List of known icon collections name. Used to resolve collection name ambiguity.
    * e.g. `simple-icons-github` -> `simple-icons:github` instead of `simple:icons-github`
    * 
    * When not provided, will use the full Iconify collection list.
    * 
    * 
    * @studioIcon material-symbols:format-list-bulleted
   */
   collections?: string[] | null,

   /**
    * Custom Icon Collections
    * 
    * 
    * @studioIcon material-symbols:format-list-bulleted
   */
   customCollections?: string[] | null,

   /**
    * Icon Provider
    * 
    * Provider to use for fetching icons
    * 
    * - `server` - Fetch icons with a server handler
    * - `iconify` - Fetch icons with Iconify API, purely client-side
    * - `none` - Do not fetch icons (use client bundle only)
    * 
    * `server` by default; `iconify` when `ssr: false`
    * 
    * 
    * @enum server,iconify,none
    * 
    * @studioIcon material-symbols:cloud
   */
   provider?: "server" | "iconify" | "none" | undefined,

   /**
    * Iconify API Endpoint URL
    * 
    * Define a custom Iconify API endpoint URL. Useful if you want to use a self-hosted Iconify API. Learn more: https://iconify.design/docs/api.
    * 
    * @default "https://api.iconify.design"
    * 
    * @studioIcon material-symbols:api
   */
   iconifyApiEndpoint?: string,

   /**
    * Fallback to Iconify API
    * 
    * Fallback to Iconify API if server provider fails to found the collection.
    * 
    * @default true
    * 
    * @enum true,false,server-only,client-only
    * 
    * @studioIcon material-symbols:public
   */
   fallbackToApi?: boolean | "server-only" | "client-only",

   /**
    * Local API Endpoint Path
    * 
    * Define a custom path for the local API endpoint.
    * 
    * @default "/api/_nuxt_icon"
    * 
    * @studioIcon material-symbols:api
   */
   localApiEndpoint?: string,

   /**
    * Fetch Timeout
    * 
    * Set the timeout for fetching icons.
    * 
    * @default 1500
    * 
    * @studioIcon material-symbols:timer
   */
   fetchTimeout?: number,

   /**
    * Customize callback
    * 
    * Customize icon content (replace stroke-width, colors, etc...).
    * 
    * 
    * @studioIcon material-symbols:edit
   */
   customize?: IconifyIconCustomizeCallback,
  },

  /**
   * UI
   * 
   * UI Customization.
   * 
   * 
   * @previewIcon i-lucide-palette
  */
  ui?: {
   /**
    * Colors
    * 
    * Manage main colors of your application
    * 
    * 
    * @previewIcon i-lucide-palette
   */
   colors?: {
    /**
     * Primary
     * 
     * Primary color of your UI.
     * 
     * @default "green"
     * 
     * @required red,orange,amber,yellow,lime,green,emerald,teal,cyan,sky,blue,indigo,violet,purple,fuchsia,pink,rose
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-palette
    */
    primary?: string,

    /**
     * Neutral
     * 
     * Neutral color of your UI.
     * 
     * @default "slate"
     * 
     * @required slate,gray,zinc,neutral,stone
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-palette
    */
    neutral?: string,
   },

   /**
    * Icons
    * 
    * Manage icons used in the application.
    * 
    * 
    * @previewIcon i-lucide-settings
   */
   icons?: {
    /**
     * Search Bar
     * 
     * Icon to display in the search bar.
     * 
     * @default "i-lucide-search"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-search
    */
    search?: string,

    /**
     * Dark mode
     * 
     * Icon of color mode button for dark mode.
     * 
     * @default "i-lucide-moon"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-moon
    */
    dark?: string,

    /**
     * Light mode
     * 
     * Icon of color mode button for light mode.
     * 
     * @default "i-lucide-sun"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-sun
    */
    light?: string,

    /**
     * External Link
     * 
     * Icon for external link.
     * 
     * @default "i-lucide-external-link"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-external-link
    */
    external?: string,

    /**
     * Chevron
     * 
     * Icon for chevron.
     * 
     * @default "i-lucide-chevron-down"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-chevron-down
    */
    chevron?: string,

    /**
     * Hash
     * 
     * Icon for hash anchors.
     * 
     * @default "i-lucide-hash"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-hash
    */
    hash?: string,
   },
  },

  /**
   * SEO
   * 
   * SEO configuration.
   * 
   * 
   * @previewIcon i-lucide-search
  */
  seo?: {
   /**
    * Title
    * 
    * Title to display in the header.
    * 
    * @default ""
    * 
    * @previewInput string
    * 
    * @previewIcon i-lucide-type
   */
   title?: string,

   /**
    * Description
    * 
    * Description to display in the header.
    * 
    * @default ""
    * 
    * @previewInput string
    * 
    * @previewIcon i-lucide-type
   */
   description?: string,
  },

  /**
   * Header
   * 
   * Header configuration.
   * 
   * 
   * @previewIcon i-lucide-layout
  */
  header?: {
   /**
    * Title
    * 
    * Title to display in the header.
    * 
    * @default ""
    * 
    * @previewInput string
    * 
    * @previewIcon i-lucide-type
   */
   title?: string,

   /**
    * Logo
    * 
    * Header logo configuration.
    * 
    * 
    * @previewIcon i-lucide-image
   */
   logo?: {
    /**
     * Light Mode Logo
     * 
     * Pick an image from your gallery.
     * 
     * @default ""
     * 
     * @previewInput media
     * 
     * @previewIcon i-lucide-sun
    */
    light?: string,

    /**
     * Dark Mode Logo
     * 
     * Pick an image from your gallery.
     * 
     * @default ""
     * 
     * @previewInput media
     * 
     * @previewIcon i-lucide-moon
    */
    dark?: string,

    /**
     * Alt
     * 
     * Alt to display for accessibility.
     * 
     * @default ""
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-text
    */
    alt?: string,

    /**
     * Wordmark
     * 
     * Wordmark (text logo) configuration for brand assets.
     * 
     * 
     * @previewIcon i-lucide-type
    */
    wordmark?: {
     /**
      * Light Mode Wordmark
      * 
      * Wordmark image for light mode.
      * 
      * @default ""
      * 
      * @previewInput media
      * 
      * @previewIcon i-lucide-sun
     */
     light?: string,

     /**
      * Dark Mode Wordmark
      * 
      * Wordmark image for dark mode.
      * 
      * @default ""
      * 
      * @previewInput media
      * 
      * @previewIcon i-lucide-moon
     */
     dark?: string,
    },

    /**
     * Class
     * 
     * Additional CSS classes to apply to the logo image.
     * 
     * @default ""
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-paintbrush
    */
    class?: string,

    /**
     * Display
     * 
     * Which logo variant to show in the header: "logo" for the icon or "wordmark" for the full wordmark.
     * 
     * @default "logo"
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-layout
    */
    display?: string,

    /**
     * Favicon
     * 
     * Path to the favicon file for brand asset downloads.
     * 
     * @default "/favicon.ico"
     * 
     * @previewInput media
     * 
     * @previewIcon i-lucide-app-window
    */
    favicon?: string,

    /**
     * Brand Assets URL
     * 
     * Link to the full brand assets page (shown in the logo context menu).
     * 
     * @default ""
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-palette
    */
    brandAssetsUrl?: string,
   },
  },

  /**
   * Social Networks
   * 
   * Social links configuration.
   * 
   * 
   * @previewInput object
   * 
   * @previewIcon i-lucide-network
  */
  socials?: {
  },

  /**
   * Table of contents
   * 
   * TOC configuration.
   * 
   * 
   * @previewIcon i-lucide-list
  */
  toc?: {
   /**
    * Title
    * 
    * Title of the table of contents.
    * 
    * @default "On this page"
    * 
    * @previewInput string
    * 
    * @previewIcon i-lucide-heading
   */
   title?: string,

   /**
    * Bottom
    * 
    * Bottom section of the table of contents.
    * 
    * 
    * @previewIcon i-lucide-list
   */
   bottom?: {
    /**
     * Title
     * 
     * Title of the bottom section.
     * 
     * @default "Community"
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-heading
    */
    title?: string,

    /**
     * Links
     * 
     * Links to display in the bottom section.
     * 
     * 
     * @previewInput array
     * 
     * @previewIcon i-lucide-link
    */
    links?: Array<any>,
   },
  },

  /**
   * GitHub
   * 
   * GitHub configuration.
   * 
   * 
   * @previewIcon i-simple-icons-github
  */
  github?: {
   /**
    * URL
    * 
    * GitHub URL.
    * 
    * @default ""
    * 
    * @previewInput string
    * 
    * @previewIcon i-simple-icons-github
   */
   url?: string,

   /**
    * Branch
    * 
    * GitHub branch.
    * 
    * @default "main"
    * 
    * @previewInput string
    * 
    * @previewIcon i-lucide-git-branch
   */
   branch?: string,

   /**
    * Root Directory
    * 
    * Root directory of the GitHub repository.
    * 
    * @default ""
    * 
    * @previewInput string
    * 
    * @previewIcon i-lucide-folder
   */
   rootDir?: string,
  },

  /**
   * Assistant
   * 
   * Assistant configuration.
   * 
   * 
   * @previewIcon i-custom-ai
  */
  assistant?: {
   /**
    * Floating Input
    * 
    * Show the floating input at the bottom of documentation pages.
    * 
    * @default true
    * 
    * @previewInput boolean
    * 
    * @previewIcon i-lucide-message-circle
   */
   floatingInput?: boolean,

   /**
    * Explain with AI
    * 
    * Show the "Explain with AI" button in the documentation sidebar.
    * 
    * @default true
    * 
    * @previewInput boolean
    * 
    * @previewIcon i-lucide-brain
   */
   explainWithAi?: boolean,

   /**
    * FAQ Questions
    * 
    * List of FAQ questions. Can be an array of strings or an array of categories with questions.
    * 
    * 
    * @previewInput array
    * 
    * @previewIcon i-lucide-help-circle
   */
   faqQuestions?: Array<any>,

   /**
    * Shortcuts
    * 
    * Keyboard shortcuts configuration.
    * 
    * 
    * @previewIcon i-lucide-keyboard
   */
   shortcuts?: {
    /**
     * Focus Input
     * 
     * Shortcut to focus the floating input (e.g., meta_i, ctrl_k).
     * 
     * @default "meta_i"
     * 
     * @previewInput string
     * 
     * @previewIcon i-lucide-keyboard
    */
    focusInput?: string,
   },

   /**
    * Icons
    * 
    * Icons configuration.
    * 
    * 
    * @previewIcon i-lucide-settings
   */
   icons?: {
    /**
     * Trigger
     * 
     * Icon for the AI chat trigger button and slideover header.
     * 
     * @default "i-lucide-sparkles"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-sparkles
    */
    trigger?: string,

    /**
     * Explain
     * 
     * Icon for the "Explain with AI" button.
     * 
     * @default "i-lucide-brain"
     * 
     * @previewInput icon
     * 
     * @previewIcon i-lucide-brain
    */
    explain?: string,
   },
  },
 },
}
export type CustomAppConfig = Exclude<NuxtCustomSchema['appConfig'], undefined>
type _CustomAppConfig = CustomAppConfig

declare module '@nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}
