// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import ProductListSVG from '@assets/icons/ProductListSVG'
import { Typography } from '@components/toolkit/Typography'

export const Orders: React.FC = () => {
  return (
    <Container>
      <ProductListSVG />
      <Typography variant="s4">Listagem</Typography>
    </Container>
  )
}
