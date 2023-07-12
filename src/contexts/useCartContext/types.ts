import { ICartProduct } from '@services/types/cartProduct'
import { IProduct } from '@services/types/product'

export interface ICartContextData {
  addProduct: (product: ICartProduct, counter: number) => Promise<void>
  clearProducts: () => Promise<void>
  listProducts: ICartProduct[]
  updateProduct: (productId: string, newProduct: ICartProduct) => Promise<void>
  removeProductById: (productId: string) => Promise<void>
}
