import {AxiosInstance} from "axios"
import {ICharacter, IEpisode, ILocation, ListResponse} from "~/models"

export interface IEntityClient<T> {
    entity: string
    endpoint: string
    client: AxiosInstance
    getAll(): Promise<T[]>
    getByPage(page: number): Promise<ListResponse<T>>
    get(): Promise<ListResponse<T>>
    fetchSome(ids: number[]): Promise<T[]>
    fetch(id: number): Promise<T>
}

export interface IRAMClient {
    getCharacters(): Promise<ICharacter[]>
    getEpisodes(): Promise<IEpisode[]>
    getLocations(): Promise<ILocation[]>
}
