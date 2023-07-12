// External Libraries
import React, { useEffect, useState } from 'react'

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

export const CartDetails: React.FC = navigation => {
  // const { params } = useRoute<ProductScreenRouteProp>()
  const [data, setData] = useState<ICartProductBackend[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const cartContext = useCartContext()

  async function fetchAllProductsInCart() {
    try {
      setIsLoading(true)
      const response = await getProductsInCart('17')
      setData(response.products)
      // console.log('DATA: ', data)
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
      return <ActivityIndicator size={'large'} />
    }

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    )
  }

  function renderItem({ item }: ListRenderItemInfo<ICartProductBackend>) {
    return <ShoppingCartProductBackend order={item} />
  }

  function keyExtractor(item: ICartProductBackend) {
    return item.idProduct
  }

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
            onPress={cartContext.clearProducts}
          />
        }
      />
      <ProgressBar numberOfSteps={3} currentStep={1} />

      {renderContent()}
    </Container>
  )
}
