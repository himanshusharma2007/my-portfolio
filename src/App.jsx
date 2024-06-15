// <!-- https://www.youtube.com/watch?v=fUXQXafPF1A link for learn how to set tailwind in react + vite enviorment */ -->

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import 'tailwindcss/tailwind.css'; 
import './index.css'// Import Tailwind CSS first
// import './App/css'; // Then, import your custom CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4 w-full h-full bg-red-700">
        <h1 className="text-5xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </>
  );
}

export default App;
