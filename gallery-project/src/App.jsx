import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(0);

  let displayInfo = (
    <h3 className="text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    displayInfo = userData.map(function (elem, idx) {
      return (
        <div className="rounded" key={idx}>
          <a href={elem.url} target="_blank">
            <img
              src={elem.download_url}
              alt={idx}
              className="h-[90%] w-60 rounded-lg object-fill"
            />
            <h2 className="text-white p-2 font-bold m-2 text-lg">
              {elem.author}
            </h2>
          </a>
        </div>
      );
    });
  }

  const buttonHandler = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`
    );

    setUserData(response.data);
  };

  useEffect(
    function () {
      buttonHandler();
    },
    [page]
  );

  return (
    <div className="bg-black h-screen text-white overflow-auto">
      <div className="text-6xl fixed text-red-500 font-bold m-5 p-5">
        {page}
      </div>
      <div className="flex flex-wrap gap-4 m-10 p-10">{displayInfo}</div>
      <div className="flex items-center justify-center m-5 p-5 font-bold">
        <button
          className="bg-amber-300 text-black active:scale-95 rounded-lg"
          onClick={() => {
            if (page > 0) {
              setUserData([]);
              setPage(page - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-300 text-black rounded-lg active:scale-95"
          onClick={() => {
            setUserData([]);
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
