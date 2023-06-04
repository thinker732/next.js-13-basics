import { NextResponse } from 'next/server';
import { useRouter } from 'next/router';

export const GET = (req: Request) => {
  // Get the list of users
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
    },
  ];

  // Return the list of users as JSON
  return NextResponse.json(users);
};

