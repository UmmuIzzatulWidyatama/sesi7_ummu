const assert = require("assert");

describe("Feature Reqres Delete User", function () {
  it("Delete - should return status 204", async function () {

    const response = await fetch("https://reqres.in/api/users/714",{
        method: "DELETE",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        }
    });
    
    // Cek status code
    assert.strictEqual(response.status, 204, "Status code should be 204");
  });
  
});
