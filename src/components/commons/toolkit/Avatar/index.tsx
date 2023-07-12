// External Libraries
import React from 'react'

// Components

// Styles
import { Container, CustomText } from './styles'

interface Props {
  name: string
}

export const Avatar: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <CustomText>{name?.[0]?.toUpperCase()}</CustomText>
    </Container>
  )
}
