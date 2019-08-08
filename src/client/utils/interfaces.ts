
export interface IBlog {
    id: number,
    title: string,
    authorid: number,
    content: string,
    _created: Date,
    name: string
}

export interface ITag{
    id: number,
    name: string
}