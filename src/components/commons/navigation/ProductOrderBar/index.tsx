// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import { Container } from './styles'
import { AddProduct } from '@components/buttons/AddProduct'
import { ProductQttCounter } from '@components/buttons/ProductQttCounter'
import MinusSVG from '@assets/icons/MinusSVG'
import PlusSVG from '@assets/icons/PlusSVG'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ProductScreenRouteProp } from '@routes/types/routeProps'
import { useCartContext } from '@contexts/useCartContext'
import { NavigationProps } from '@routes/types/navigationProps'
import { ICartProduct } from '@services/types/cartProduct'
import { calculateDiscountIfExists } from '@utils/functions/products/calculateDiscountIfExists'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { addProductInCart } from '@services/api/routes/products/addProductInCart'
import { ICartProductBackend } from '@services/api/routes/products/getProductsInCart/types'
import { ActivityIndicator } from 'react-native'

export const ProductOrderBar: React.FC = () => {
  const { params } = useRoute<ProductScreenRouteProp>()
  const [isLoading, setIsLoading] = useState(false)

  const [counter, setCounter] = useState(1)

  const cartContext = useCartContext()

  const navigation = useNavigation<NavigationProps>()

  const handledPrice = calculateDiscountIfExists(params.product)

  const price = params.product.price
  const insets = useSafeAreaInsets()

  function handleQuantityChange(type: 'add' | 'remove') {
    if (type === 'add') {
      setCounter(counter + 1)
    } else {
      if (counter > 1) setCounter(counter - 1)
    }
  }

  function handleAddButton() {
    if (isLoading) {
      return 'loading'
    }
    return 'Adicionar'
  }

  async function handleProductAddition() {
    try {
      const cartProduct: ICartProductBackend = {
        productQuantity: counter,
        selectedSize: '',
        active: true,
        idProduct: params.product.id,
        idUser: '17',
        itemName: params.product.itemName,
        price: params.product.price,
        productImage: params.product.mainImageUrl
      }

      // cartContext.addProduct(cartProduct, counter)
      // console.log(cartProduct.selectedSize)
      setIsLoading(true)
      // Request
      const response = await addProductInCart(cartProduct)
      console.log(response)
      navigation.navigate('Home')
    } catch (e) {
      console.log('[handleProductAddition]: ', e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container paddingBottom={insets.bottom + 8}>
      <ProductQttCounter
        currentValue={counter}
        onChange={handleQuantityChange}
        icon1={<MinusSVG />}
        icon2={<PlusSVG />}
      />
      <AddProduct
        buttonLabel={handleAddButton()}
        price={handledPrice * counter}
        onPress={handleProductAddition}
      />
    </Container>
  )
}
