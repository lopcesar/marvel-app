export interface CharacterI {
    id: number,
    name: string,
    img: string,
    comics: Comics,
    series: Series,
    stories: Stories,
    thumbnail: ThumbnailI,
}

interface ThumbnailI {
    path: string,
    extension: string,
}

interface Comics {
    available: number,
}

interface Series {
    available: number,
}

interface Stories {
    available: number,
}
