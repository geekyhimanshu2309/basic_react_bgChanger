import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="flex h-screen w-full items-center justify-center"
    style={{backgroundColor: color}}>
      <div className="fixed flex-col justify-between outline-none rounded-3xl border-2 bottom-12 bg-white p-1">
        <button
          className="bg-red-600 px-2 outline-none rounded-3xl border-2"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-blue-600 rounded-3xl px-2 outline-none border-2"
          onClick={() => setColor("blue")}
        >
          BLue
        </button>
        <button
          className="bg-violet-600 rounded-3xl px-2 outline-none border-2"
          onClick={() => setColor("violet")}
        >
          violet
        </button>
      </div>
    </div>
  );
}

export default App;
