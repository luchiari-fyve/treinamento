import { IProduct } from '@services/types/product'

export const calculateDiscountIfExists = (product: IProduct) => {
  let salePrice = 0
  if (product.discountPercentage !== 0) {
    salePrice =
      product.price -
      product.price *
        ((product.discountPercentage ? product.discountPercentage : 0) * 0.01)
    return salePrice
  }
  return product.price
}
