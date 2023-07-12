import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const dimension = Dimensions.get('screen').width

interface Props {
  numberOfSteps: string
}

export const Container = styled.View`
  width: ${dimension}px;
  height: 4px;
  display: flex;
  flex-direction: row;
`
export const ContainerEmpty = styled.View<Props>`
  width: ${({ numberOfSteps }) => dimension / numberOfSteps}px;
  height: 100%;
  background-color: #fafafa;
`
export const ContainerFull = styled.View`
  width: ${({ numberOfSteps }) => dimension / numberOfSteps}px;
  height: 100%;
  background-color: black;
`
