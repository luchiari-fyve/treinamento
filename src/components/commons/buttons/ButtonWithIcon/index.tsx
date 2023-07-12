// External Libraries
import React, { ReactElement } from 'react'

// Components

// Styles
import { Container } from './styles'

interface Props {
  icon: ReactElement
  bgColor: string
  onPress: () => void
}

export const ButtonWithIcon: React.FC<Props> = ({ icon, bgColor, onPress }) => {
  return (
    <Container style={{ backgroundColor: bgColor }} onPress={onPress}>
      {icon}
    </Container>
  )
}
