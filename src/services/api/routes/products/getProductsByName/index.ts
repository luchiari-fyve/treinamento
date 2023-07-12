import { API } from '@services/api'
import { HttpGetProductByNameResponse, IResponse } from './types'
import { IProduct } from '@services/types/product'

export async function getProductsByName(
  itemNameSearch: string
): Promise<IResponse> {
  const response = await API.get<HttpGetProductByNameResponse>(
    `/products/name?search=${itemNameSearch}`
  )

  const searchProducts: IProduct[] = response.data.map(item => {
    return {
      id: item.id_product,
      category: item.categoria,
      itemName: item.nome,
      price: item.price,
      mainImageUrl: item.images.principal,
      otherImagesUrl: item.images.others,
      desc: item.description,
      sizes: item.sizes,
      storageQuantity: item.qtd_estoque
    }
  })

  return { products: searchProducts }
}
