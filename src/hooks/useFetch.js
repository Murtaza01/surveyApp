import { useState, useEffect } from "react";

export default function useFetch(fetchFn, data) {
  const [fetchedData, setFetchedData] = useState();
  const [error, setErorr] = useState();

  useEffect(() => {
    async function fetchingData() {
      try {
        const response = await fetchFn(data);
        setFetchedData(response);
      } catch (error) {
        setErorr({ message: error.message || "failed to fetch data" });
      }
    }
    fetchingData();
  }, []);
  return [fetchedData, error];
}
