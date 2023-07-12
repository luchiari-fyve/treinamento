// External Libraries
import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState
} from 'react'

// Types
import { ICartContextData } from './types'
import { ICartProduct } from '@services/types/cartProduct'

const CartContext = createContext<ICartContextData>({} as ICartContextData)

const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [listProducts, setListProducts] = useState<ICartProduct[]>([])

  async function addProduct(product: ICartProduct, counter: number) {
    const existingIndex = listProducts.findIndex(item => item.id === product.id)
    if (existingIndex !== -1) {
      const updatedList = [...listProducts]
      updatedList[existingIndex].quantity += counter
      setListProducts(updatedList)
      console.log(
        'O item de id ' +
          product.id +
          ' já existe na lista. A quantidade agora é: ' +
          updatedList[existingIndex].quantity
      )
    } else setListProducts([...listProducts, product])
  }

  async function clearProducts() {
    setListProducts([])
  }

  async function updateProduct(productId: string, newProduct: ICartProduct) {
    const productIndex = listProducts.findIndex(item => item.id === productId)
    listProducts[productIndex] = newProduct
    setListProducts([...listProducts])
  }

  async function removeProductById(productId: string) {
    const updatedList = listProducts.filter(product => product.id !== productId)
    setListProducts(updatedList)
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        listProducts,
        clearProducts,
        updateProduct,
        removeProductById
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCartContext(): ICartContextData {
  const context = useContext(CartContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useCartContext must be within a ContextProvider')
  }

  return context
}

export { CartContextProvider, useCartContext }
