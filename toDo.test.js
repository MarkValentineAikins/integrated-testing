const {fetchData} = require("./fetchData");

describe("Testing Post", () => {
    it("should create a new Post", async() => {
        const posts = await fetchData("posts");
        expect(posts.len).toBe(100);
    });
    });
