// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import {
  Container,
  Field,
  Form,
  FormField,
  FormFieldBigPart,
  FormFieldSmallPart,
  TextField
} from './styles'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { TopBar } from '@components/structure/TopBar'
import { ProgressBar } from '@components/toolkit/ProgressBar'
import { getAddressByCep } from '@services/api/routes/products/getAddressByCep'
import { Alert } from 'react-native'

export const ShipmentAddress: React.FC = () => {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  function handleCepChange(value: string) {
    setCep(value)
    handleCep(value)
  }

  async function handleCep(cep: string) {
    try {
      if (cep.length === 8) {
        const returnedAddress = await getAddressByCep(cep)

        setStreet(returnedAddress.address.street)
        setNeighborhood(returnedAddress.address.neighborhood)
        setCity(returnedAddress.address.city)
        setState(returnedAddress.address.state)
      }
    } catch (e) {
      Alert.alert('Erro: ', 'Opa! A requisição deu algum erro.')
    }
  }

  return (
    <Container>
      <TopBar label="Endereço" />
      <ProgressBar numberOfSteps={3} currentStep={2} />
      <Form>
        <FormField>
          <Typography variant="s3" color={theme.colors.textSecondary}>
            CEP
          </Typography>
          <TextField
            name="cep"
            placeholder="CEP"
            defaultValue={cep}
            onChangeText={handleCepChange}
          />
        </FormField>

        <Field>
          <FormFieldBigPart>
            <Typography variant="s3" color={theme.colors.textSecondary}>
              Logradouro
            </Typography>
            <TextField placeholder="Logradouro" value={street} />
          </FormFieldBigPart>

          <FormFieldSmallPart>
            <Typography variant="s3" color={theme.colors.textSecondary}>
              Número
            </Typography>
            <TextField placeholder="Número" />
          </FormFieldSmallPart>
        </Field>

        <FormField>
          <Typography variant="s3" color={theme.colors.textSecondary}>
            Bairro
          </Typography>
          <TextField placeholder="Bairro" value={neighborhood} />
        </FormField>

        <FormField>
          <Typography variant="s3" color={theme.colors.textSecondary}>
            Complemento
          </Typography>
          <TextField placeholder="Complemento" />
        </FormField>

        <Field>
          <FormFieldBigPart>
            <Typography variant="s3" color={theme.colors.textSecondary}>
              Cidade
            </Typography>
            <TextField placeholder="Cidade" value={city} />
          </FormFieldBigPart>

          <FormFieldSmallPart>
            <Typography variant="s3" color={theme.colors.textSecondary}>
              Estado
            </Typography>
            <TextField placeholder="Estado" value={state} />
          </FormFieldSmallPart>
        </Field>
      </Form>
    </Container>
  )
}
