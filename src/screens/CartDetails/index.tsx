// External Libraries
import React, { ReactElement, useEffect, useRef, useState } from 'react'

// Components

// Styles
import { Container, Message } from './styles'
import theme from '@global/theme'
import { ActivityIndicator, Alert, ListRenderItemInfo } from 'react-native'
import { ButtonWithText } from '@components/buttons/ButtonWithText'
import { useCartContext } from '@contexts/useCartContext'
import { FlatList } from 'react-native-gesture-handler'
import { ShoppingCartProduct } from '@components/structure/ShoppingCartProduct'
import { ICartProduct } from '@services/types/cartProduct'
import { TopBar } from '@components/structure/TopBar'
import { ProgressBar } from '@components/toolkit/ProgressBar'
import { ICartProductBackend } from '@services/api/routes/products/getProductsInCart/types'
import { getProductsInCart } from '@services/api/routes/products/getProductsInCart'
import { Typography } from '@components/toolkit/Typography'
import { ShoppingCartProductBackend } from '@components/structure/ShoppingCartProductBackend'
import { USER_ID } from '@utils/constants/user'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { LoadingProduct } from '@components/structure/LoadingProduct'
import Animated, {
  FadeIn,
  FadeOutLeft,
  FadeOutRight,
  SlideOutRight
} from 'react-native-reanimated'
import { updateProductInCart } from '@services/api/routes/products/updateProductQuantity'

export const CartDetails: React.FC = navigation => {
  const [data, setData] = useState<ICartProductBackend[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchAllProductsInCart() {
    try {
      setIsLoading(true)
      const response = await getProductsInCart(USER_ID)
      setData(response.products)
    } catch (e) {
      Alert.alert('Erro: ', 'Algo deu errado!')
    } finally {
      setIsLoading(false)
    }
  }

  function renderContent() {
    if (!data.length && !isLoading) {
      return (
        <Message>
          <Typography variant="s2" color={theme.colors.textSecondary}>
            Nada por aqui...
          </Typography>
        </Message>
      )
    } else if (!data.length && isLoading) {
      return renderLoadingItems()
    }

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    )
  }

  function renderLoadingItems() {
    const listOfLoadingItems: Array<ReactElement> = []
    for (let i = 0; i < 3; i++) {
      listOfLoadingItems.push(<LoadingProduct />)
    }
    return listOfLoadingItems
  }

  function renderItem({ item }: ListRenderItemInfo<ICartProductBackend>) {
    return (
      <Animated.View entering={FadeIn.delay(150)} exiting={FadeOutRight}>
        <ShoppingCartProductBackend order={item} />
      </Animated.View>
    )
  }

  function keyExtractor(item: ICartProductBackend) {
    return item.idProduct
  }

  async function removeAllItems() {
    for (let i = 0; i < data.length; i++) {
      const removingProduct = { ...data[i], productQuantity: 0 }
      await updateProductInCart(removingProduct)
    }
    setData([])
  }

  // Conserta isso aqui
  useEffect(() => {
    fetchAllProductsInCart()
  }, [])

  return (
    <Container>
      <TopBar
        label="Carrinho"
        thirdButton={
          <ButtonWithText
            text="Limpar"
            textColor={theme.colors.textSecondary}
            bgColor="white"
            onPress={removeAllItems}
          />
        }
      />
      <ProgressBar numberOfSteps={3} currentStep={1} />

      {renderContent()}
    </Container>
  )
}
