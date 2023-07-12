// External Libraries
import React, { PropsWithChildren } from 'react'

// Components

// Styles
import { Container } from './styles'

export const BottomBar: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>
}
