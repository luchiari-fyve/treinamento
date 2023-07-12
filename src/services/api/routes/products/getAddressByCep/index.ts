import { API } from '@services/api'
import { HttpGetAddressByCepResponse, IResponse } from './types'

export async function getAddressByCep(cep: string): Promise<IResponse> {
  const response = await API.get<HttpGetAddressByCepResponse>(
    `/-cep?cep=${cep}`
  )

  const myAddress = response.data

  console.log(myAddress)

  return { address: myAddress }
}
