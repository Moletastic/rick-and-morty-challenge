export declare type AnyObj = Record<string, unknown>
export type ExtractKeysOfValueType<T, K> = { [I in keyof T]: T[I] extends K ? I : never }[keyof T];
export declare type StrField<T> = {[K in keyof T]: T[K] extends string ? K : never}[keyof T]
