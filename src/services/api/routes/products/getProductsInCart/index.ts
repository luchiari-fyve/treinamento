import { API } from '@services/api'
import {
  HttpGetCartProductsResponse,
  ICartProductBackend,
  IResponse
} from './types'

export async function getProductsInCart(idUser: string): Promise<IResponse> {
  const response = await API.get<HttpGetCartProductsResponse>(
    `/cart?id_user=${idUser}`
  )

  const productList: ICartProductBackend[] = response.data.map(item => {
    return {
      idProduct: item.id_product,
      selectedSize: item.size,
      productQuantity: item.qtd_product,
      idUser: item.id_user,
      price: item.amount,
      active: item.actived,
      productImage: item.image,
      itemName: item.name
    }
  })
  return { products: productList }
}
