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

interface Props {
  product: ICartProduct
}

export const ShoppingCartProduct: React.FC<Props> = ({ product }) => {
  const cartContext = useCartContext()
  const [counter, setCounter] = useState(product.quantity)

  function displaySalePriceIfExists() {
    // eslint-disable-next-line no-undef
    if (calculateDiscountIfExists(product) === product.price) {
      return
    }
    return (
      <Typography variant="s3" color={theme.colors.green}>
        R$ {calculateDiscountIfExists(product).toFixed(2)}
      </Typography>
    )
  }

  function handleQuantityChange(type: 'add' | 'remove') {
    setCounter(prevCounter => {
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

  function updateProductQuantity(qtt: number) {
    console.log(qtt)
    const newProduct = { ...product, quantity: qtt }
    cartContext.updateProduct(product.id, newProduct)
  }

  function removeProduct() {
    cartContext.removeProductById(product.id)
    // console.log(cartContext.listProducts)
  }

  return (
    <Container>
      <Image
        source={{
          uri: product.mainImageUrl
        }}
        style={{ height: 108, width: 97, borderRadius: 4 }}
      />

      <TextInfo>
        <Typography variant="s1">{product.itemName}</Typography>

        <ContainerPrices>
          {displaySalePriceIfExists()}
          <Typography variant="s2" color={theme.colors.textSecondary}>
            R$ {product.price}
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
