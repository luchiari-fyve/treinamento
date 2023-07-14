// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import { Container, SizeContainer } from './styles'
import { Typography } from '@components/toolkit/Typography'
import { ProductScreenRouteProp } from '@routes/types/routeProps'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
  chosenSize: string
  onChange: (size: string) => void
}

export const SizeCarousel: React.FC<Props> = ({ chosenSize, onChange }) => {
  // Hooks
  const { params } = useRoute<ProductScreenRouteProp>()

  // States
  const [productSize, setProductSize] = useState(chosenSize)

  // Functions
  function handleSizeClick(size: any) {
    if (productSize !== size) {
      setProductSize(size)
      onChange(size)
    }
  }

  function renderSize({ item }: any) {
    const isSelected = productSize === item
    return (
      <SizeContainer
        activeOpacity={0.6}
        style={
          isSelected ? { borderColor: '#585858' } : { borderColor: '#eaeaea' }
        }
        onPress={() => handleSizeClick(item)}
      >
        <Typography variant="b3">{item}</Typography>
      </SizeContainer>
    )
  }

  return (
    <Container>
      <Typography variant="s1">Tamanhos</Typography>
      <FlatList
        data={params.product.sizes}
        renderItem={renderSize}
        horizontal
        keyExtractor={(item, index) => String(index)}
      />
    </Container>
  )
}
