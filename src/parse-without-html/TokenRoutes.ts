import { Data } from "./Data"
import { Token } from "./Token"

export type TokenHandler = (stack: Array<Data>, token: Token) => void

export type TokenRoutes = Record<string, TokenHandler>
