import { useState } from "react";
import Card from "./Card";

const App = () => {
  const [notes, setnotes] = useState([])
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")
  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
     
    const copyNotes=[...notes]
    copyNotes.push({title,content})
    setnotes(copyNotes)

    setcontent("")
    settitle("")

  };

  return (
    <div className="flex flex-col lg:flex-row items-start min-h-screen">
      {/* Left Section - Form */}
      <div className="text-black w-full lg:w-1/2 p-8 my-10">
        <h1 className="font-bold text-4xl mb-6">Add Note</h1>

        <form onSubmit={formHandler} className="flex flex-col items-start">
          <input
            type="text"
            placeholder="Enter your Title"
            className="border rounded-md px-3 py-2 mb-5 w-full"
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }}
          />

          <textarea
            placeholder="Enter your Content"
            className="border rounded-md px-3 py-2 h-40 mb-5 w-full resize-none"
            value={content}
            onChange={(e) => {
              setcontent(e.target.value)
            }}
          />

          <button className="border rounded-md px-4 py-2 hover:bg-blue-400 bg-blue-500 text-white transition">
            Add Note
          </button>
        </form>
      </div>

      {/* Right Section - Notes */}
      <div className="w-full lg:w-1/2 p-6 bg-gray-100 flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-6">Your Notes</h1>

        <div className="flex flex-wrap justify-center gap-5 overflow-auto max-h-[80vh] p-3 ">
          {notes.map((elem, i) => (
            <Card
              key={i}
              title={elem.title}
              content={elem.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
