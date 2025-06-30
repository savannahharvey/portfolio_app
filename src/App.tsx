import { BrowserRouter, Route } from "react-router-dom"
import { useState } from "react";
import { Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
