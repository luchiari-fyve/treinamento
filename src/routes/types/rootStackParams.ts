import { ICartProductBackend } from '@services/api/routes/products/getProductsInCart/types'
import { ICartProduct } from '@services/types/cartProduct'
import { IProduct } from '@services/types/product'

export type RootStackParamList = {
  Home: undefined
  ProductScreen: {
    product: IProduct
  }
  CartDetails: undefined
  Checkout: undefined
}
