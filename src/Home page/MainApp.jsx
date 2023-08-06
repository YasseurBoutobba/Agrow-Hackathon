import React, { createContext, useState } from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import Settings from "../Settings page/components/Settings";
export const propsContext = createContext();

const MainApp = () => {
  const [Indexhandle, setNavIndex] = useState(0);

  return (
    <propsContext.Provider
      value={{
        Indexhandle,
        setNavIndex,
      }}
    >
      <div className="flex basis-[100%] h-max bg-navbg p-4">
        <Nav />
        <Home index={Indexhandle} />
        <Settings index={Indexhandle} />
      </div>
    </propsContext.Provider>
  );
};

export default MainApp;
