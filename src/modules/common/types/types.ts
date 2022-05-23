
export type ProfileType = {
  dateOfBirth: string,
  email: string,
  id: number,
  img: string,
  imgUrl: string,
  roleCode: string,
  username: string,
}

export interface ProfileState {
  profile: ProfileType
  loading: boolean
  error: unknown
}

