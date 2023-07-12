// External Libraries
import React from 'react'

// Components

// Styles
import { ButtonView, Container, Description, ReturnButton } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ProductScreenRouteProp } from '@routes/types/routeProps'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { SizeCarousel } from '@components/navigation/SizeCarousel'
import { ProductImagesCarousel } from '@components/navigation/ProductImagesCarousel'
import { ProductOrderBar } from '@components/navigation/ProductOrderBar'
import { ButtonWithIcon } from '@components/buttons/ButtonWithIcon'
import LeftArrowSVG from '@assets/icons/LeftArrowSVG'
import { NavigationProps } from '@routes/types/navigationProps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const ProductScreen: React.FC = navigation => {
  const { params } = useRoute<ProductScreenRouteProp>()
  const navigate = useNavigation<NavigationProps>()
  const insets = useSafeAreaInsets()

  return (
    <Container>
      <ProductImagesCarousel />

      <ButtonView paddingTop={insets.top} paddingLeft={insets.left + 25}>
        <ReturnButton>
          <ButtonWithIcon
            icon={<LeftArrowSVG />}
            bgColor={'white'}
            onPress={navigate.goBack}
          />
        </ReturnButton>
      </ButtonView>

      <Description
        paddingLeft={insets.left + 8}
        paddingRight={insets.right + 8}
      >
        <Typography variant="b3" color={theme.colors.textSecondary}>
          {params.product.category}
        </Typography>

        <Typography variant="s1">{params.product.itemName}</Typography>

        <Typography variant="b2" color={theme.colors.textSecondary}>
          {params.product.desc}
        </Typography>

        <SizeCarousel />
      </Description>

      <ProductOrderBar />
    </Container>
  )
}
