// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { TextInput } from 'react-native-gesture-handler'
import MagnifierIconSVG from '@assets/icons/MagnifierIconSVG'

interface Props {
  searchItem: string
  placeholder: string
  onChange: (v: string) => void
}

export const SearchBarInput: React.FC<Props> = ({
  searchItem,
  placeholder,
  onChange
}) => {
  return (
    <Container>
      <MagnifierIconSVG />
      <TextInput
        value={searchItem}
        onChangeText={onChange}
        placeholder={placeholder}
      ></TextInput>
    </Container>
  )
}
