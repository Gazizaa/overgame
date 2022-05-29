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
