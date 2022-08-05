import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt=''
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
        />
        {/* <Image
          onClick={signOut}
          src={session.user.image}
          alt=''
          width={40}
          height={40}
          className={`rounded-full hover:bg-gray-200 cursor-pointer p-2 ${className}`}
        /> */}
      </>
    );
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md hover:brightness-105 ${className}`}
        onClick={signIn}>
        Sign In
      </button>
    </>
  );
}
