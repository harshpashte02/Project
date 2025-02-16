import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-olive-500"); // Default color

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("bg-red-500")} className="outline-none px-4 py-1 rounded-full text-white bg-red-500">
            Red
          </button>
          <button onClick={() => setColor("bg-green-500")} className="outline-none px-4 py-1 rounded-full text-white bg-green-500">
            Green
          </button>
          <button onClick={() => setColor("bg-blue-500")} className="outline-none px-4 py-1 rounded-full text-white bg-blue-500">
            Blue
          </button>
          <button onClick={() => setColor("bg-pink-500")} className="outline-none px-4 py-1 rounded-full text-white bg-pink-500">
            Pink
          </button>
          <button onClick={() => setColor("bg-yellow-500")} className="outline-none px-4 py-1 rounded-full text-black bg-yellow-500">
            Yellow
          </button>
          <button onClick={() => setColor("bg-orange-500")} className="outline-none px-4 py-1 rounded-full text-white bg-orange-500">
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
