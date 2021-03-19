import RAMAnalyzer from "./analyzer"
import instance from "./axios"
import RAMClient from "./client"
import {Appearance, LetterCount} from "./models"
import {TimeChecked} from "./types"
import {checkPromiseTime} from "./utils"

function reportResults<T>(results: TimeChecked<T>, description: string): void {
    console.log(description)
    console.log(results.payload)
    console.log(`Tiempo transcurrido: ${results.elapsed} segundos\n`)
}

async function run() {
    const client = new RAMClient(instance)
    const analyzer = new RAMAnalyzer(client)
    const jobs: [Promise<TimeChecked<LetterCount<any>[]>>, Promise<TimeChecked<Appearance>>] = [
        checkPromiseTime<LetterCount<any>[]>(analyzer.getLetterCounter()),
        checkPromiseTime<Appearance>(analyzer.getOrigins()),
    ]
    const results = await Promise.all(jobs)
    const [c1, c2] = results
    reportResults(c1, "Parte 1: Contando incidencia de letra por entidad")
    reportResults(c2, "Parte 2: Mostrando aparición y location (origin) de character por episode")
}

run()
