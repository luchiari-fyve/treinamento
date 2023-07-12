import { IProduct } from '@services/types/product'

interface HttpGetAllProductsProducts {
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

export interface HttpGetAllProductsResponse {
  products: HttpGetAllProductsProducts[]
}

export interface IResponse {
  products: IProduct[]
}
