import { auth } from '@clerk/nextjs';

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return userId === process.env.NEXT_PUBLIC_ADMIN_ID;
};