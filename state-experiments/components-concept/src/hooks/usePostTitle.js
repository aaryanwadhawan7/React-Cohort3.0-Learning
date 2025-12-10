import { useEffect, useState } from "react";

// custom hook 
export function usePostTitle() {
  const [postTitle, setPostTitle] = useState({});

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const json = await response.json();
      setPostTitle(json);
    }

    getPosts();
  }, []);

  return postTitle;
}
