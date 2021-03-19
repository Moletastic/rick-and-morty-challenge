export function countLetter<T>(array: T[], key: keyof T, letter: string): number{
    const regex = new RegExp(letter, "g")
    return array.reduce((x, y: T) => { 
        const val: string = y[key] as any
        return x + (val.match(regex) || []).length
    }, 0)
}
