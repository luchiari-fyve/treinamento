// External Libraries
import React, { ReactElement } from 'react'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  icon: ReactElement
  text: string
  bgColor: string
  textColor: string
  onPress: () => void
}

export const ButtonWithIconText: React.FC<Props> = ({
  icon,
  text,
  bgColor,
  textColor,
  onPress
}) => {
  return (
    <Container style={{ backgroundColor: bgColor }} onPress={onPress}>
      {icon}
      <Typography variant={'b2'} color={textColor}>
        {text}
      </Typography>
    </Container>
  )
}
