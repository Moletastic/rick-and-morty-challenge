import instance from "../axios"
import RAMClient from "../client"

const client = new RAMClient(instance)

describe("RAMClient listing requests", () => {
    test("Getting characters", async () => {
        const characters = await client.getCharacters()
        expect(characters.length).toBeGreaterThan(0)
    })
    test("Getting episodes", async () => {
        const episodes = await client.getEpisodes()
        expect(episodes.length).toBeGreaterThan(0)
    })
    test("Getting locations", async () => {
        const locations = await client.getLocations()
        expect(locations.length).toBeGreaterThan(0)
    })
})
