// External Libraries
import React, { useEffect, useState } from 'react'

// Components

// Styles
import {
  BottomBar,
  Container,
  ContainerProducts,
  ContainerProductsTitle,
  ContainerSearchBar,
  Message,
  ProductList
} from './styles'
import { Avatar } from '@components/toolkit/Avatar'
import { ProductCard } from '@components/structure/ProductCard'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { ButtonBar } from '@components/navigation/ButtonBar'
import { SearchBarInput } from '@components/toolkit/SearchBarInput'
import { ActivityIndicator, Alert, ListRenderItemInfo } from 'react-native'
import { IProduct } from '@services/types/product'
import { ShoppingCart } from '@components/structure/ShoppingCart'
import { getAllProducts } from '@services/api/routes/products/getAllProducts'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getProductsByName } from '@services/api/routes/products/getProductsByName'

export const Home: React.FC = navigation => {
  const insets = useSafeAreaInsets()
  const [data, setData] = useState<IProduct[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchAllProducts() {
    try {
      setIsLoading(true)
      const response = await getAllProducts()
      setData(response.products)
    } catch (e) {
      Alert.alert('Erro', 'Algo deu errado')
    } finally {
      setIsLoading(false)
    }
  }

  async function searchItem(itemNameSearch: string) {
    setSearch(itemNameSearch)
    if (itemNameSearch.trim() === '') {
      return fetchAllProducts()
    }

    try {
      setIsLoading(true)
      const response = await getProductsByName(itemNameSearch)
      setData(response.products)
    } catch (e) {
      //
    } finally {
      setIsLoading(false)
    }
  }

  function renderItem({ item }: ListRenderItemInfo<IProduct>) {
    return <ProductCard product={item} />
  }

  function keyExtractor(item: IProduct) {
    return item.id
  }

  function renderContent() {
    if (!data.length && !isLoading) {
      return (
        <Message>
          <Typography variant="s2" color={theme.colors.textSecondary}>
            Lista vazia
          </Typography>
        </Message>
      )
    } else if (!data.length && isLoading) {
      return <ActivityIndicator size={'large'} />
    }

    return (
      <ProductList
        data={data}
        horizontal={false}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    )
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <Container paddingTop={insets.top}>
      <ContainerSearchBar>
        <SearchBarInput
          searchItem={search}
          placeholder="Pesquisar"
          onChange={searchItem}
        />
        <Avatar name="Laura" />
      </ContainerSearchBar>

      <ContainerProductsTitle>
        <Typography variant="s1" color={theme.colors.textPrimary}>
          Todos os produtos
        </Typography>
        <Typography variant="b3" color={theme.colors.textSecondary}>
          ({data.length} produtos)
        </Typography>

        {/* <Typography variant="b3" color={theme.colors.textSecondary}>
          Visualizar todos
        </Typography> */}
      </ContainerProductsTitle>

      <ContainerProducts>{renderContent()}</ContainerProducts>

      <ShoppingCart />
      <ButtonBar />
    </Container>
  )
}
