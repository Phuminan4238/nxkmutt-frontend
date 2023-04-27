import React from "react";

function SearchResults({ results }) {
  return (
    <>
      Result
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchResults;
