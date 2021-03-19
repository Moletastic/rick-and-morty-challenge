import {AxiosInstance} from "axios"
import {ICharacter, IEpisode, ILocation, ListResponse} from "./models"
import {IRAMClient} from "./types"

export default class RAMClient implements IRAMClient {
    client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async getList<T>(endpoint: string): Promise<T[]> {
        const req = await this.client.get<ListResponse<T>>(endpoint)
        return req.data.results
    }

    async getCharacters() {
        return this.getList<ICharacter>("/character")
    }

    async getEpisodes() {
        return this.getList<IEpisode>("/episode")
    }

    async getLocations() {
        return this.getList<ILocation>("/location")
    }
}
