const assert = require("assert");

describe("Feature Reqres Update User", function () {
  it("PATCH - should return status 200", async function () {

    const response = await fetch("https://reqres.in/api/users/714",{
        method: "PATCH",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Izza edited"
        })
    });

    const data = await response.json();

    // Cek status code
    // console.log(data)
    assert.strictEqual(response.status, 200, "Status code should be 200");
  });
  
});
