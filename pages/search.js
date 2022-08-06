import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { mockResponse } from "../Response";

export async function getServerSideProps(context) {
  const { term } = context.query;

  const mockData = true;
  const data = mockData
    ? mockResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_SEARCH_API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${term}${
          context.query.searchType && "&searchType=image"
        }`
      ).json();

  return {
    props: { results: data },
  };
}

export default function Search({ results }) {
  // console.log(results);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults results={results} />
    </>
  );
}
