import RAMClient from "./client"
import {SimpleDict} from "./helpers"
import {Appearance, ICharacter, IEpisode, ILocation, LetterCount} from "./models"
import {IRAMAnalyzer} from "./types"
import {countLetter} from "./utils"

export default class RAMAnalyzer implements IRAMAnalyzer {
    client: RAMClient

    constructor(client: RAMClient) {
        this.client = client
    }

    async getLetterCounter() {
        const promises: Promise<LetterCount<any>>[] = [
            this.getListCounter<ICharacter>(this.client.getCharacters(), {
                field: "name",
                letter: "c",
                entity: "character",
            }),
            this.getListCounter<IEpisode>(this.client.getEpisodes(), {
                field: "name",
                letter: "e",
                entity: "episode"
            }),
            this.getListCounter<ILocation>(this.client.getLocations(), {
                field: "name",
                letter: "l",
                entity: "location",
            }),
        ]
        return await Promise.all(promises)
    }

    async getOrigins() {
        const characters = await this.client.getCharacters()
        const episodes = await this.client.getEpisodes()
        const indexed: SimpleDict = {}
        const appearance: Appearance = {}
        const locations = new Set<string>()
        characters.map(character => (indexed[character.url] = character.origin.name))
        episodes.map(episode => {
            locations.clear()
            episode.characters.map(url => {
                if (indexed[url]) locations.add(indexed[url])
            })
            appearance[episode.name] = {
                characters: episode.characters.length,
                locations,
            }
        })
        return appearance
    }

    async getListCounter<T>(func: Promise<T[]>, partial: Omit<LetterCount<T>, "quantity">): Promise<LetterCount<T>> {
        const list = await func
        return {
            quantity: countLetter(list, partial.field, partial.letter),
            ...partial,
        }
    }
}
