import {countLetter} from "../utils"

describe("Counter validation", () => {
    test.each([
        ["e", [{name: "Chester"}, {name: "Cheetos"}, {name: "Cheese"}], 7],
        ["o", [{name: "Choso"}, {name: "Chestor"}, {name: "Chis"}], 3],
        ["c", [{name: "Choso"}, {name: "Chestor"}, {name: "Chece"}], 4],
    ])("Counting coincidences for %s's", (letter, values, expected) => {
        expect(countLetter(values, "name", letter)).toBe(expected)
    })
})
