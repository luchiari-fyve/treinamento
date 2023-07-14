import { API } from '@services/api'
import { ICartProductBackend } from '../getProductsInCart/types'
import { IResponse } from './types'
import { USER_ID } from '@utils/constants/user'

export async function updateProductInCart(
  product: ICartProductBackend
): Promise<IResponse> {
  const response = await API.post(
    `/cart?id_user=${USER_ID}&id_product=${product.idProduct}&qtd_product=${product.productQuantity}&action=change&size=${product.selectedSize}`
  )
  console.log(response.data)

  return response.data
}
