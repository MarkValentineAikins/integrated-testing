const axios = require("axios");

const baseUrl = "https://jsonplaceholder.typicode.com";

exports.fetchData = async (endPoint) =>{
    try {
        const result = await axios(`${baseUrl}/${endPoint}`);
        return result.data;
    } catch (error) {
        console.log(error.message);

    };

    it("Should contain post with ID 3", async()=>{
        const posts = await fetchData("posts");
        expect(posts).toContainEqual({
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          });

    })
};



