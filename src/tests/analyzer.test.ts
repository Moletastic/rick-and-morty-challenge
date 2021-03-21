import RAMAnalyzer from "../analyzer"
import instance from "../axios"
import RAMClient from "../client"
import {checkPromiseTime} from "../utils"

const client = new RAMClient(instance)
const analyzer = new RAMAnalyzer(client)

describe("RAMAnalyzer challenge solving", () => {
    test("Challenge 1", async () => {
        const results = await analyzer.getLetterCounter()
        expect(results.length).toEqual(3)
    })
    test("Challenge 2", async () => {
        const results = await analyzer.getOrigins()
        const episodes = await client.getEpisodes()
        const episode_names = Object.keys(results)
        expect(episode_names.length).toBeGreaterThan(0)
        expect(episode_names.length).toBe(episodes.length)
        expect(episode_names).not.toContain(undefined)
        expect(episode_names.map(ep => results[ep].locations)).not.toContain(undefined)
    })
})

describe("RAMAnalyzer challenge time performance", () => {
    test("Challenge 1", async () => {
        const timed = await checkPromiseTime(analyzer.getLetterCounter())
        expect(timed.elapsed).toBeLessThan(3)
    })
    test("Challenge 2", async () => {
        const timed = await checkPromiseTime(analyzer.getOrigins())
        expect(timed.elapsed).toBeLessThan(3)
    })
})
