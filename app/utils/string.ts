export const slugify = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
export const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)
export const toHumanReadable = (str: string): string => capitalizeFirstLetter(str.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase())
