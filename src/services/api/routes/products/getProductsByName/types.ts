import { IProduct } from '@services/types/product'

interface HttpGetProductByName {
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

export type HttpGetProductByNameResponse = HttpGetProductByName[]

export interface IResponse {
  products: IProduct[]
}
