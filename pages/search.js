import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
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

export default function search({ results }) {
  console.log(results);
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </>
  );
}
