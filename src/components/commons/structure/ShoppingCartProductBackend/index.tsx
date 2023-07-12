// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import { Bottom, Container, ContainerPrices, TextInfo } from './styles'
import { calculateDiscountIfExists } from '@utils/functions/products/calculateDiscountIfExists'
import { ICartProduct } from '@services/types/cartProduct'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { Image } from 'react-native'
import { ProductQttCounter } from '@components/buttons/ProductQttCounter'
import MinusSVG from '@assets/icons/MinusSVG'
import PlusSVG from '@assets/icons/PlusSVG'
import { ButtonWithIcon } from '@components/buttons/ButtonWithIcon'
import TrashCanSVG from '@assets/icons/TrashCanSVG'
import { useCartContext } from '@contexts/useCartContext'
import { ICartProductBackend } from '@services/api/routes/products/getProductsInCart/types'
import { addProductInCart } from '@services/api/routes/products/addProductInCart'

interface Props {
  order: ICartProductBackend
}

export const ShoppingCartProductBackend: React.FC<Props> = ({ order }) => {
  const cartContext = useCartContext()
  const [counter, setCounter] = useState(order.productQuantity)

  function handleQuantityChange(type: 'add' | 'remove') {
    setCounter((prevCounter: number) => {
      let newCounter

      if (type === 'add') {
        newCounter = prevCounter + 1
      } else {
        newCounter = prevCounter > 1 ? prevCounter - 1 : 1
      }

      updateProductQuantity(newCounter)
      return newCounter
    })
  }

  async function updateProductQuantity(qtt: number) {
    console.log(qtt)
    const newProduct = { ...order, productQuantity: qtt }
    await addProductInCart(newProduct)
  }

  function removeProduct() {
    cartContext.removeProductById(order.idProduct)
  }

  return (
    <Container>
      <Image
        source={{
          uri: order.productImage
        }}
        style={{ height: 108, width: 97, borderRadius: 4 }}
      />

      <TextInfo>
        <Typography variant="s1">{order.itemName}</Typography>

        <ContainerPrices>
          <Typography variant="s2" color={theme.colors.textSecondary}>
            R$ {order.price}
          </Typography>
        </ContainerPrices>

        <Bottom>
          <ProductQttCounter
            currentValue={counter}
            onChange={handleQuantityChange}
            icon1={<MinusSVG />}
            icon2={<PlusSVG />}
          />
          <ButtonWithIcon
            icon={<TrashCanSVG />}
            bgColor={'#eaeaea'}
            onPress={removeProduct}
          />
        </Bottom>
      </TextInfo>
    </Container>
  )
}
