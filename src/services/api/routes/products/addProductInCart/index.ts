import { API } from '@services/api'
import { ICartProduct } from '@services/types/cartProduct'
import { ICartProductBackend } from '../getProductsInCart/types'
import { IResponse } from './types'

export async function addProductInCart(
  product: ICartProductBackend
): Promise<IResponse> {
  const response = await API.post(
    `/cart?id_user=17&id_product=${product.idProduct}&qtd_product=${product.productQuantity}&action=add&size=${product.selectedSize}`
  )

  return response.data
}
