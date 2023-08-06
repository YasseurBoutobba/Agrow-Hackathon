import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Landing page/Main';
import Sign from './Sign up/SignUp';
import MainApp from './Home page/MainApp';
import './index.css';


const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"/Sign"} element={<Sign />}></Route>
          <Route path={"/Home"} element={<MainApp />}></Route>


        </Routes>
    </BrowserRouter>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
