const assert = require("assert");

describe("Feature Reqres Create User", function () {
  it("POST - should return status 201", async function () {

    const response = await fetch("https://reqres.in/api/users",{
        method: "POST",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Izza",
            job: "leader"
        })
    });

    const data = await response.json();

    // Cek status code
    // console.log(data)
    assert.strictEqual(response.status, 201, "Status code should be 201");
  });
  
  it("POST - response should contain an id ", async function () {

    const response = await fetch("https://reqres.in/api/users",{
        method: "POST",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Izza",
            job: "leader"
        })
    });

    const data = await response.json();

    // console.log(data)
    // Cek apakah properti `id` ada
    assert.ok(data.id, "Response should contain an 'id'");
  });

});
