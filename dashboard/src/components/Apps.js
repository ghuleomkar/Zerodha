import React from "react";
import { GeneralContextProvider } from "./GeneralContext";
import WatchList from "./WatchList";

function App() {
  return (
    <GeneralContextProvider>
      <WatchList />
    </GeneralContextProvider>
  );
}

export default App;
