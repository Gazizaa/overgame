export interface AuthState {
  loading: boolean
  error: any
}

export interface CredentialsState {
  accessToken: string
  expiresIn: number | null
  refreshExpiresIn: number | null
  refreshToken: string
  refreshTokenExpDate: string
  scope: string
  sessionState: string
  tokenType: string
}
