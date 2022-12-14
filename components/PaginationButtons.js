import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationButtons() {
  const router = useRouter();
  const { term, searchType, start } = router.query;
  const startIndex = Number(start) || 1;

  return (
    <div className='flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 text-blue-700'>
      {startIndex > 10 && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex - 10
          }`}>
          <div className='cursor-pointer flex flex-col items-center hover:underline'>
            <ChevronLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex + 10
          }`}>
          <div className='cursor-pointer flex flex-col items-center hover:underline'>
            <ChevronRightIcon className='h-5' />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
