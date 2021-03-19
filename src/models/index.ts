export interface Appearance {
    [key: string]: {
        characters: number
        locations: Set<string>
    }
}
export interface LetterCount<T> {
    letter: string
    entity: string
    field: keyof T
    quantity: number
}
export * from "./character"
export * from "./episode"
export * from "./location"
