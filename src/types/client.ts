import {ICharacter, IEpisode, ILocation} from "~/models";

export interface IRAMClient {
    getCharacters(): Promise<ICharacter[]>
    getEpisodes(): Promise<IEpisode[]>
    getLocations(): Promise<ILocation[]>
}

