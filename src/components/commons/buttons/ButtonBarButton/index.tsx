// External Libraries
import React, { ReactElement } from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  icon: ReactElement
  buttonLabel: string
}

export const ButtonBarButton: React.FC<Props> = ({ icon, buttonLabel }) => {
  return (
    <Container>
      {icon}
      <Typography variant="s4">{buttonLabel}</Typography>
    </Container>
  )
}
