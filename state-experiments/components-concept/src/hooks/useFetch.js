//useFetch () hook takes a url as an input and give back a response (data)
// you can't make custom hook async
// it is advised to get fetch logic inside useEffect becoz we want the data to be fetched
// the moment component mounts for the first time

import { useState, useEffect } from "react";

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getData() {
    const res = await fetch(url);
    const json = await res.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);

    getData();
  }, [url]);

  useEffect(() => {
    setInterval(getData, 10 * 1000);
  }, []);

  // you have passed finalData (state) as an object you have to import this as an object
  return { finalData, loading };
}
