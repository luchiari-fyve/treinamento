interface HttpGetAddressByCep {
  cep: string
  street: string
  neighborhood: string
  city: string
  state: string
  freight: string
}

export type HttpGetAddressByCepResponse = HttpGetAddressByCep

export interface IResponse {
  address: HttpGetAddressByCep
}
