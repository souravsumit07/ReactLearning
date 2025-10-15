import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="h-60 w-55 line-clamp-1  text-start overflow-clip py-5 px-1 rounded-2xl shadow-md bg-yellow-200    bg-[url('https://www.pngall.com/wp-content/uploads/5/Sticky-Note.png')]   bg-cover  bg-center border ">
      <h2 className="text-2xl font-bold m-1 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
};

export default Card;
