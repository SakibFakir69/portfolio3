import React from "react";
import GridBackgroundView, { GridBackground } from "./shared/SmothGridBackground";
import MenuBar from "./shared/MenuBar";

function App() {
  return (
    <div>
      <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
        <MenuBar/>
       
       <GridBackgroundView/>

     


      </div>
    </div>
  );
}

export default App;
