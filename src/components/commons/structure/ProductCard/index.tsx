// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ContainerPrices } from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types/navigationProps'
import { IProduct } from '@services/types/product'
import { calculateDiscountIfExists } from '@utils/functions/products/calculateDiscountIfExists'

interface Props {
  product: IProduct
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const navigation = useNavigation<NavigationProps>()

  return (
    <Container
      onPress={() =>
        navigation.navigate('ProductScreen', {
          product
        })
      }
    >
      <Image
        source={{
          uri: product.mainImageUrl
        }}
        style={{ height: 147, width: 175, borderRadius: 4 }}
      />
      <Typography variant="b3" color={theme.colors.textSecondary}>
        {product.category}
      </Typography>
      <Typography variant="s2">{product.itemName}</Typography>

      <ContainerPrices>
        {product.discountPercentage ? (
          <Typography variant="s3" color={theme.colors.green}>
            R$ {calculateDiscountIfExists(product).toFixed(2)}
          </Typography>
        ) : (
          <></>
        )}
        <Typography variant="s3" color={theme.colors.textSecondary}>
          R$ {product.price}
        </Typography>
      </ContainerPrices>
    </Container>
  )
}
