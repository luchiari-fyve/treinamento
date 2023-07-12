interface HttpGetCartProductsProducts {
  id_product: string
  size: string
  qtd_product: number
  date_expiration?: string
  id_user: string
  amount: number
  actived: boolean
  image: string
  name: string
}

export interface ICartProductBackend {
  idProduct: string
  selectedSize: string
  productQuantity: number
  expirationDate?: string
  productImage: string
  itemName: string
  idUser: string
  price: number
  active: boolean
}

export type HttpGetCartProductsResponse = HttpGetCartProductsProducts[]

export interface IResponse {
  products: ICartProductBackend[]
}
