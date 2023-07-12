export interface IProduct {
  id: string
  category: string
  itemName: string
  price: number
  discountPercentage?: number
  mainImageUrl: string
  otherImagesUrl: string[]
  desc: string
  sizes?: string[]
  storageQuantity: number
}
