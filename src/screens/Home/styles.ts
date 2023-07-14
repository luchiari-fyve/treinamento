import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
`

export const ContainerProducts = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 3%;
  /* display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  row-gap: 20px; */
`

export const ContainerProductsTitle = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  /* Arrumar */
  padding-left: 4%;
  padding-right: 4%;
`

export const ContainerSearchBar = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 72px;
  gap: 16px;
`

export const ProductList = styled.FlatList``

export const BottomBar = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: beige;
`
export const Message = styled.View`
  height: 10%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
