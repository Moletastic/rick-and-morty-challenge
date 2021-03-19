import client from "./axios"
import {ICharacter, ListResponse, IEpisode, ILocation} from "./models"
import {countLetter} from "./utils"

export async function getCharacters(): Promise<ICharacter[]> {
    const req = await client.get<ListResponse<ICharacter>>("/character")
    return req.data.results
}

export async function getEpisodes(): Promise<IEpisode[]> {
    const req = await client.get<ListResponse<IEpisode>>("/episode")
    return req.data.results
}

export async function getLocations(): Promise<ILocation[]> {
    const req = await client.get<ListResponse<ILocation>>("/location")
    return req.data.results
}

export async function getCharacterCounter() {
    const characters = await getCharacters()
    return countLetter(characters, "name", "c")
}

export async function getEpisodeCounter() {
    const episodes = await getEpisodes()
    return countLetter(episodes, "name", "e")
}

export async function getLocationCounter() {
    const locations = await getLocations()
    return countLetter(locations, "name", "l")
}

export async function getLetterCounter() {
    const promises: Promise<number>[] = [getCharacterCounter(), getEpisodeCounter(), getLocationCounter()]
    return await Promise.all(promises)
}

export async function getOrigins() {
    const characters = await getCharacters()
    const indexed: {[key: string]: string} = {}
    characters.map(character => (indexed[character.url] = character.origin.name))
    console.log(indexed)
}
