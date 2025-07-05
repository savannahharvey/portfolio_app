import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </>
  )
}

export default App
