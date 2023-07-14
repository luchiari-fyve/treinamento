// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import { Container, SizeContainer } from './styles'
import { ProductScreenRouteProp } from '@routes/types/routeProps'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { Dimensions, Image } from 'react-native'

export const ProductImagesCarousel: React.FC = () => {
  // Dimensions
  const windowHeight = Dimensions.get('window').height
  const windowWidth = Dimensions.get('window').width

  // Hooks
  const { params } = useRoute<ProductScreenRouteProp>()

  // States
  const [image, setImage] = useState(params.product.mainImageUrl)

  // Functions
  function handleImageClick(item: any) {
    setImage(item)
  }

  function renderSize({ item }: any) {
    const handleImageClickWithItem = handleImageClick.bind(item)
    return (
      <SizeContainer activeOpacity={0.6} onPress={handleImageClickWithItem}>
        <Image
          source={{
            uri: item
          }}
          style={{ height: 50, width: 70, borderRadius: 4 }}
        />
      </SizeContainer>
    )
  }

  return (
    <Container>
      <Image
        source={{
          uri: image
        }}
        style={{
          height: windowHeight / 2.3,
          width: windowWidth
        }}
      />
      <FlatList
        data={params.product.otherImagesUrl}
        renderItem={renderSize}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}
