import {Appearance, LetterCount} from "~/models";
import {IRAMClient} from "./client";

export interface IRAMAnalyzer {
    client: IRAMClient;
    getLetterCounter(): Promise<LetterCount<any>[]>
    getOrigins(): Promise<Appearance>
}
