import { useEffect } from "react";
import customProtocolCheck from "custom-protocol-check";

function App() {
  useEffect(() => {
    customProtocolCheck("gaindemo://", () => {
      window.location = "https://demo.gainapp.com/";
    });
  }, []);

  return <div className="App">Redirecting</div>;
}

export default App;
