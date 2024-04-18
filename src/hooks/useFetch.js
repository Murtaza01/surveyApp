import { useState, useEffect } from "react";

export default function useFetch(fetchFn, data) {
  const [fetchedData, setFetchedData] = useState();
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchingData() {
      try {
        const response = await fetchFn(data);
        setFetchedData(response);
      } catch (error) {
        setError({ message: error.message || "failed to fetch data" });
      }
      setIsFetching(false);
    }
    fetchingData();
  }, []);
  return [fetchedData, error, isFetching];
}
