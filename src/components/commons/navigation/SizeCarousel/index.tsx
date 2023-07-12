// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import { Container, SizeContainer } from './styles'
import { Typography } from '@components/toolkit/Typography'
import { ProductScreenRouteProp } from '@routes/types/routeProps'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'

export const SizeCarousel: React.FC = () => {
  const { params } = useRoute<ProductScreenRouteProp>()
  const [selectedSize, setSelectedSize] = useState(null)

  function handleSizeClick(size: any) {
    if (selectedSize === size) {
      setSelectedSize(null)
    } else {
      setSelectedSize(size)
    }
  }

  function renderSize({ item }: any) {
    const isSelected = selectedSize === item
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
