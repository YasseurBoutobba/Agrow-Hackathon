import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Landing page/Main';


const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
