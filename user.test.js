const fetchData = require("fetchData");

describe("Testing users", () => {
    it("should return 10 users", async() => {
        const users = await fetchData("users");
        expect(users.length).toBe(10);

    });

    it("should contain users with ID 1", async() => {
        const users = await fetchData("users");
        expect(users).toContainEqual(
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
        );
    });

});
