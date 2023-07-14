// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { View } from 'react-native'

export const LoadingProduct: React.FC = () => {
  return (
    <Container>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 97, height: 108, borderRadius: 4 }} />

          <View style={{ marginLeft: 10 }}>
            <View style={{ width: 230, height: 20, marginBottom: 10 }} />
            <View style={{ width: 110, height: 20, marginBottom: 10 }} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 250
              }}
            >
              <View style={{ width: 70, height: 40 }} />
              <View style={{ width: 40, height: 40, borderRadius: 40 }} />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </Container>
  )
}
