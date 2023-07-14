import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 40%;
  background-color: black;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: ${(props: { disabled: any }) => (props.disabled ? 0.4 : 1)};
`
