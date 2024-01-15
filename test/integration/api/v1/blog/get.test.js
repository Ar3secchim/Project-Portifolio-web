test("GET  to api/v1/blog should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/blog");
  expect(response.status).toEqual(200);
});

test("GET  to api/v1/blog should return object project", async () => {
  const response = await fetch("http://localhost:3000/api/v1/blog");
  expect(response.json).toEqual(Object);
});
