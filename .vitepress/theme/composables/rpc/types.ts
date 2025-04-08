export interface RpcMethodProps {
  method: string
  humanReadableName: string
  name: string
  description: string
  tags: { name: string }[]
  input: MethodIO[]
  output: MethodIO[]
}

export interface MethodIO {
  key: string
  type: string
  required: boolean
  label: string
}
