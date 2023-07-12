// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import { Container, Message } from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { ActivityIndicator } from 'react-native'

interface Props {
  buttonLabel: string
  price: number
  onPress: () => void
}

export const AddProduct: React.FC<Props> = ({
  buttonLabel,
  price,
  onPress
}) => {
  const [quantity] = useState(1)

  const totalPrice = price * quantity

  function checkIfIsLoading() {
    if (buttonLabel === 'loading') {
      return <ActivityIndicator size={'small'} color={'white'} />
    }
    return (
      <Message>
        <Typography variant="s2" color={theme.colors.white}>
          {buttonLabel}
        </Typography>
        <Typography variant="s2" color={theme.colors.white}>
          R$ {totalPrice.toFixed(2)}
        </Typography>
      </Message>
    )
  }

  return (
    <Container activeOpacity={0.6} onPress={onPress}>
      {checkIfIsLoading()}
    </Container>
  )
}
