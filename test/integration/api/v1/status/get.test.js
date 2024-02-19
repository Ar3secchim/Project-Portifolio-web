test("should return a status code of 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toEqual(200);
});

test("should return an object with an update_at property", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  
  expect(responseBody.update_at).toEqual(
    new Date(responseBody.update_at).toISOString(),
  );
});

test("should return an object with version database", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  expect(responseBody.database.dependecies.version).toEqual("16.0");
});