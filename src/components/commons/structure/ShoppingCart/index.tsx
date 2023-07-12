// External Libraries
import React, { useEffect, useState } from 'react'

// Components

// Styles
import { Cart, Container } from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import CartSVG from '@assets/icons/CartSVG'
import { useCartContext } from '@contexts/useCartContext'
import { calculateDiscountIfExists } from '@utils/functions/products/calculateDiscountIfExists'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types/navigationProps'
import { getProductsInCart } from '@services/api/routes/products/getProductsInCart'

export const ShoppingCart: React.FC = () => {
  const cartContext = useCartContext()

  const navigation = useNavigation<NavigationProps>()

  const [myCart, setMyCart] = useState([])

  async function fetchProductsInCart() {
    const cart = await getProductsInCart('17')

    setMyCart(cart)
  }

  useEffect(() => {
    fetchProductsInCart()
  })

  function getNumberOfProducts() {
    let counter = 0
    for (let i = 0; i < cartContext.listProducts.length; i++) {
      counter += cartContext.listProducts[i].quantity
    }
    return counter
  }

  function getTotalPriceOfProducts() {
    let totalPrice = 0
    cartContext.listProducts.forEach(product => {
      totalPrice += calculateDiscountIfExists(product) * product.quantity
    })
    return totalPrice
  }

  function handleCartClick() {
    navigation.navigate('Checkout')
  }

  function checkIfCartIsEmpty() {
    if (getNumberOfProducts() === 0) return <></>
    return (
      <Container activeOpacity={0.7} onPress={handleCartClick}>
        <CartSVG />
        <Cart>
          <Typography variant="b4" color={theme.colors.textPrimary}>
            {getNumberOfProducts()}
          </Typography>
        </Cart>
        <Typography variant="s2" color={theme.colors.white}>
          Visualizar Carrinho
        </Typography>
        <Typography variant="s2" color={theme.colors.white}>
          R$ {getTotalPriceOfProducts().toFixed(2)}
        </Typography>
      </Container>
    )
  }

  return checkIfCartIsEmpty()
}
