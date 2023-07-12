import { ICartProductBackend } from '../getProductsInCart/types'

interface HttpGetProductInCart {
  id_product: string
  images: {
    principal: string
    others: string[]
  }
  qtd_estoque: number
  nome: string
  price: number
  categoria: string
  description: string
  sizes: string[]
}

export type HttpGetProductByNameResponse = HttpGetProductInCart[]

export interface IResponse {
  products: ICartProductBackend[]
}
