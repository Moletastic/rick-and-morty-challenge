import {AnyObj} from "~/helpers";

export interface ICharacter {
    id: string;
    name: string
    status: string
    type: string
    gender: string;
    origin: {name: string, url: string};
    location: AnyObj;
    image: string
    episode: AnyObj[];
    url: string
    created: Date
}

export interface ListResponse<T> {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: T[]
}
