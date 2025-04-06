export type Prettify<T> = {
   [K in keyof T]: T[K]
} & {}

export type Product = {
   id: number | string
   title: string
   image: string

   price: number
   old_price?: number
   discount_percent: number

   rating: number
   total_rating_feedbacks: number
}

export type VoidElement =
   | 'area'
   | 'base'
   | 'br'
   | 'col'
   | 'hr'
   | 'img'
   | 'input'
   | 'link'
   | 'meta'
   | 'param'
   | 'command'
   | 'keygen'
   | 'source'

export type OmitChildrenFromVoid<C extends React.ElementType> = C extends VoidElement
   ? Omit<React.ComponentPropsWithRef<C>, 'children'>
   : React.ComponentPropsWithRef<C>

export type DistributiveOmit<T, K extends keyof unknown> = T extends unknown ? Omit<T, K> : never
