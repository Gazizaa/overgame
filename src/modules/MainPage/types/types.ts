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
