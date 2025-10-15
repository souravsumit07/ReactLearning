import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [ImageData, setImageData] = useState([]);
  const [index, setindex] = useState(1);

  const getdata = async () => {
    try {
      const data = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`
      );
      setImageData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setImageData([]);
    }
  };

  useEffect(() => {
    getdata();
  }, [index]);

  return (
    <div>
      <div className="flex  gap-20  justify-center ">
        <button
          disabled={index === 1}
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className="bg-amber-300 px-4 py-2 rounded-xl text-xl font-bold cursor-pointer"
          onClick={() => {
            if (index > 1) setindex(index - 1);
            setImageData([]);
          }}
        >
          Prev
        </button>
        <h1 className=" bg-red-500/70 text-white px-4 py-2 rounded-xl shadow-lg text-lg font-semibold">
          📄 Page {index}
        </h1>
        <button
          className="bg-amber-300 px-4 py-2 rounded-xl text-xl font-bold cursor-pointer"
          onClick={() => {
            setImageData([]);
            setindex(index + 1);
          }}
        >
          Next
        </button>
      </div>

      {ImageData.length === 0 ? (
        <h1 className="text-red-600 text-center font-bold mt-10">
          Loading Images....
        </h1>
      ) : (
        <div className="m-5 p-5 flex flex-wrap justify-center">
          {ImageData.map((element, idx) => (
            <div
              key={idx}
              className="w-40 m-3 border  flex flex-col text-center items-center rounded-lg"
            >
              <a
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline mt-2 mb-2 text-white"
              >
                <img
                  src={element.download_url}
                  alt=""
                  className="object-cover w-full h-64 rounded-t-lg overflow-hidden"
                  loading="lazy"
                />
                ImageLink
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
