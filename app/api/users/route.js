export async function GET(request) {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    },
  ];

  return new Response(JSON.stringify(users));
}
