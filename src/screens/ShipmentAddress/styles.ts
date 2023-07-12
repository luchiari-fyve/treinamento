import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: white;
  width: 100%;
  height: 87%;
`

export const Form = styled.View`
  margin-top: 5%;
  background-color: white;
  width: 100%;
  align-items: left;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding-left: 2.5%;
  padding-right: 2.5%;
`
export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const FormField = styled.View`
  width: 100%;
  gap: 4px;
`

export const FormFieldBigPart = styled.View`
  width: 66%;
  gap: 4px;
`
export const FormFieldSmallPart = styled.View`
  width: 30%;
  gap: 4px;
`

export const TextField = styled.TextInput`
  width: 100%;
  height: 45px;
  border-width: 1px;
  border-color: #ebebeb;
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
`
