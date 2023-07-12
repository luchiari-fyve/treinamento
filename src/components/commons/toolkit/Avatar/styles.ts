import theme from '@global/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${theme.colors.black};
`

export const CustomText = styled.Text`
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 500;
`
