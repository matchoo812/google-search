import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  const { formattedSearchTime, formattedTotalResults } = results.searchInformation;
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mb-5 mt-3'>
        About {formattedTotalResults} results ({formattedSearchTime} seconds)
      </p>
      {results.items?.map(item => (
        <div key={item.link} className='max-w-xl mb-8'>
          <div className='group'>
            <a href={item.link} className='text-sm truncate'>
              {item.formattedUrl}
            </a>
            <a
              href={item.link}
              className='group-hover:underline decoration-blue-800'>
              <h2 className='truncate text-xl font-medium text-blue-800 '>
                {item.title}
              </h2>
            </a>
          </div>
          <p className='text-gray-600'>{Parser(item.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
