import { useState, useEffect } from "react";

export default function useFetch(fetchFn, data) {
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    async function fetchingData() {
      try {
        const resData = await fetchFn(data);
        setFetchedData(resData);
      } catch (error) {
        console.log("hello world");
      }
    }
    fetchingData();
  }, []);
  return fetchedData;
}
