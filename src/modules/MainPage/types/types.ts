export type Genres = {
  code: string,
  description: string,
  id: number,
  imgLink: string,
  name: string
}

export type CreateGameParams = {
  game:  {
    name: {
      ru: string,
      en: string
    },
    description: {
      ru: string,
      en: string
    },
    gameLink: string,
    price: number,
    genreIds: number[]
  },
  imgFile: File
}

export type Games = {
  id: number,
  name: string,
  description: string,
  gameLink: string,
  imgLink: string,
  price: number,
  rating: number
  genres: Genres[]
  creator: {
    id: number
    username: string,
    img: string,
  },
  moderator: {
    id: number,
    username: string,
    img: string,
  },
  status: string,
}

export type Developer = {
  id: number,
  username: string,
  img: string
}

export type SwiperImages = {
  code: string,
  description: {
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string
  },
  id: number,
  imgUrl: string,
  name: {
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string
  }
}

export type AllDevelopers = {
  dateOfBirth: string,
  email: string,
  id: number,
  img: string,
  imgUrl: string,
  roleCode: string,
  username: string
}

export type RateParams = {
  gameId: number
  grade: number
}

export type CommentParams = {
  gameId: number
  text?: string
  commentId?: number
}

export type Comments = {
  id: number,
  text: string,
  gameId: number,
  userInfo: {
    id: number,
    username: string,
    img: string
  },
  dateCreated: number
}


