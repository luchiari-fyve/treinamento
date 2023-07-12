// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'

interface Props {
  label: string
  onPress: () => void
}

export const ContinueButton: React.FC<Props> = ({ label, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Typography variant="s2" color={theme.colors.white}>
        {label}
      </Typography>
    </Container>
  )
}
