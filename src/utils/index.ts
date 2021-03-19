import {TimeChecked} from "~/types"

export function countLetter<T>(array: T[], key: keyof T, letter: string): number {
    const regex = new RegExp(letter, "g")
    return array.reduce((x, y: T) => {
        const val: string = y[key] as any
        return x + (val.match(regex) || []).length
    }, 0)
}

export async function checkPromiseTime<T>(func: Promise<T>): Promise<TimeChecked<T>> {
    const start = new Date().getTime()
    const payload = await func
    const end = new Date().getTime()
    return {
        payload,
        elapsed: (end - start) / 1000,
    }
}
