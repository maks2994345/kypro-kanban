import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="wrapper">

              < PopExit />

              < PopNewCard />

              < PopBrowse />

              < Header />

              < Main />
          </div>

          <script src="js/script.js"></script>
      </>
  )
}

export default App
