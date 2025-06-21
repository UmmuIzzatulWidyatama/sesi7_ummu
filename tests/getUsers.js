const assert = require("assert");

describe("Feature Reqres", function () {
  it("GET List - should return status 200", async function () {

    const response = await fetch("https://reqres.in/api/users",{
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    // Cek status code
    // console.log(data)
    assert.strictEqual(response.status, 200, "Status code should be 200");
  });

  it("GET List - should return json", async function () {

    const response = await fetch("https://reqres.in/api/users",{
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    
    // Cek content-type JSON
    const contentType = response.headers.get("content-type");
    assert.ok(contentType.includes("application/json"), "Response should be JSON");
  });

  it("GET List - should return <500ms", async function () {
    const start = Date.now();

    const response = await fetch("https://reqres.in/api/users",{
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        }
    });

    const duration = Date.now() - start;

    const data = await response.json();

    // Cek response time
    assert.ok(duration < 500, `Response time ${duration}ms exceeded 500ms`);
  });
});
