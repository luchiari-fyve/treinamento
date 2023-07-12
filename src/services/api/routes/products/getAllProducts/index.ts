import { API } from '@services/api'
import { HttpGetAllProductsResponse, IResponse } from './types'
import { IProduct } from '@services/types/product'

export async function getAllProducts(): Promise<IResponse> {
  const response = await API.get<HttpGetAllProductsResponse>('/products')

  const updatedProducts: IProduct[] = response.data.products.map(item => {
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

  // console.log(JSON.stringify(response.data))
  return { products: updatedProducts }
}
