import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  const router = useRouter();
  const searchRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchRef.current.value.trim();
    if (!term) return;
    router.push(`/search?term=${term}&searchType=`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          onClick={() => router.push("/")}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          objectFit='contain'
          width='120'
          height='40'
          alt='Google Logo'
          className='cursor-pointer'
        />
        <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
          <input
            type='text'
            defaultValue={router.query.term}
            ref={searchRef}
            className='w-full focus:outline-none'
          />
          <XIcon
            className='h-7 text-gray-500 cursor-pointer sm:mr-3'
            onClick={() => (searchRef.current.value = "")}
          />
          <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3' />
          <SearchIcon
            className='h-6 hidden sm:inline-flex text-blue-500'
            onClick={search}
          />
          <button type='submit' onClick={search} hidden></button>
        </form>

        <User className='ml-auto whitespace-nowrap' />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
