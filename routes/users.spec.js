const request = require("supertest");
const app = require("../app");

describe("GET /users/", () => {
  it("should return the text 'respond with a resource'", async () => {
    const res = await request(app).get("/users/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch('respond with a resource');
  });
});