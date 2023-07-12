// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  text: string
  textColor: string
  bgColor: string
  onPress: () => void
}

export const ButtonWithText: React.FC<Props> = ({
  text,
  textColor,
  bgColor,
  onPress
}) => {
  return (
    <Container style={{ backgroundColor: bgColor }} onPress={onPress}>
      <Typography variant="s3" color={textColor}>
        {text}
      </Typography>
    </Container>
  )
}
