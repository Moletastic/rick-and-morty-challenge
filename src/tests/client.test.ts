import instance from "../axios"
import RAMClient from "../client"

const client = new RAMClient(instance)

describe("RAMClient listing requests", () => {
    test.each([
        ["character", client.getCharacters(), client.character.get()],
        ["episode", client.getEpisodes(), client.episode.get()],
        ["location", client.getLocations(), client.location.get()],
    ])("Matching %s's total rows with info.count", async (entity, listRequest, infoReq) => {
        const list = await listRequest;
        const {info} = await infoReq;
        expect(list.length).toBe(info.count)
    })
})
