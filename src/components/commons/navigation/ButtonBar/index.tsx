// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { ButtonBarButton } from '@components/buttons/ButtonBarButton'
import ProductListSVG from '@assets/icons/ProductListSVG'
import OrderListSVG from '@assets/icons/OrderListSVG'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const ButtonBar: React.FC = () => {
  const insets = useSafeAreaInsets()

  return (
    <Container paddingBottom={insets.bottom + 8}>
      <ButtonBarButton icon={<ProductListSVG />} buttonLabel="Listagem" />
      <ButtonBarButton icon={<OrderListSVG />} buttonLabel="Pedidos" />
    </Container>
  )
}
