import {getLetterCounter, getOrigins} from "./client"

async function run() {
    const results = await getLetterCounter()
    console.log(results)
    await getOrigins()
}

run()
