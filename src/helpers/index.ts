export declare type AnyObj = Record<string, unknown>
export declare type StrField<T> = {[K in keyof T]: T[K] extends string ? K : never}[keyof T]
export declare type SimpleDict = {[key: string]: string}
