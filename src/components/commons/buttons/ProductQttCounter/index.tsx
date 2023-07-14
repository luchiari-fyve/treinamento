// External Libraries
import React, { ReactElement } from 'react'

// Components

// Styles
import { Container, Counter } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  currentValue: number
  onChange: (type: 'add' | 'remove') => void

  icon1: ReactElement
  icon2: ReactElement
}

export const ProductQttCounter: React.FC<Props> = ({
  currentValue,
  onChange,
  icon1,
  icon2
}) => {
  function handleAddPress() {
    onChange('add')
  }

  function handleRemovePress() {
    onChange('remove')
  }
  return (
    <Container>
      <Counter onPress={handleRemovePress}>{icon1}</Counter>
      <Typography variant="s1">{currentValue}</Typography>
      <Counter onPress={handleAddPress}>{icon2}</Counter>
    </Container>
  )
}
