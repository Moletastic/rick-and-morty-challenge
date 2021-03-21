import {AxiosInstance} from "axios"
import {ICharacter, IEpisode, ILocation, ListResponse} from "./models"
import {IEntityClient, IRAMClient} from "./types"
import {flatSingle} from "./utils"

export class EntityClient<T> implements IEntityClient<T> {
    constructor(public entity: string, public endpoint: string, public client: AxiosInstance) {}

    async get() {
        const req = await this.client.get<ListResponse<T>>(this.endpoint)
        return req.data
    }

    async getAll() {
        const {info, results} = await this.get()
        if (info.pages > 1) {
            let page = 2
            const requests: Promise<ListResponse<T>>[] = []
            while (page <= info.pages) {
                requests.push(this.getByPage(page++))
            }
            const resultset = await Promise.all(requests)
            const flatted = flatSingle(resultset.map(r => r.results))
            results.push(...flatted)
        }
        return results
    }

    async getByPage(page: number) {
        const req = await this.client.get<ListResponse<T>>(`${this.endpoint}/?page=${page}`)
        return req.data
    }

    async fetchSome(ids: number[]) {
        const req = await this.client.get<T[]>(`${this.endpoint}/${ids}`)
        return req.data
    }

    async fetch(id: number) {
        const req = await this.client.get<T>(`${this.endpoint}/${id}`)
        return req.data
    }
}

export default class RAMClient implements IRAMClient {
    client: AxiosInstance
    character: EntityClient<ICharacter>
    episode: EntityClient<IEpisode>
    location: EntityClient<ILocation>

    constructor(client: AxiosInstance) {
        this.client = client
        this.character = new EntityClient("character", "/character", this.client)
        this.episode = new EntityClient("episode", "/episode", this.client)
        this.location = new EntityClient("location", "/location", this.client)
    }

    async getCharacters() {
        return await this.character.getAll()
    }

    async getEpisodes() {
        return await this.episode.getAll()
    }

    async getLocations() {
        return await this.location.getAll()
    }
}
