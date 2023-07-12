import { IProduct } from '../product'

export interface ICartProduct extends IProduct {
  // idUser: string
  quantity: number
  selectedSize: string
  // active: boolean
}
