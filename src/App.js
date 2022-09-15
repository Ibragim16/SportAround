import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Event from "./components/HasEvent/Event";
import TimePage from "./components/main/TimePage";

function App() {
  const [state, setState] = useState();
  
  useEffect(() => {
    setInterval(()=>{
      fetch("https://beta.sosportom.ru/graphql/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          query:
            "query videostandEvents ($videostand_id: ID!) { videostandEvents(videostand_id: $videostand_id) { current_and_upcoming { title, is_main, dt_start, dt_end, dt_create }, finished { title, is_main, dt_start, dt_end, dt_create } } }",
          variables: { videostand_id: "6" },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setState(()=> data.data.videostandEvents.current_and_upcoming)
        });
    },60000)
   
  }, []);
  if (state?.length) {
    return (
      <div className="App">
        <Event state={state} />
      </div>
    );
  }
  return (
    <div className="App">
      <TimePage />
    </div>
  );
}

export default App;
