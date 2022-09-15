import { useEffect, useState } from "react";
import "./App.css";
import Event from "./components/EventPage/EventPage";
import TimePage from "./components/TimePage/TimePage";

function App() {
  
  const [eventsSpisok, setEventsSpisok] = useState([]);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    setInterval(() => {
      fetch("https://beta.sosportom.ru/graphqdl/", {
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
          setEventsSpisok(() => data.data.videostandEvents.current_and_upcoming);
        })
        .catch((err)=>{
          setError(()=> err.toString())
        });
    }, 6000);
    console.log(error)

  }, []);

  if (error !== null) {
    return (
      <div className="App">
        <div className="errorBox">
          <h4 className="error">{error}</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      {eventsSpisok.length ? <Event eventsSpisok={eventsSpisok} /> : <TimePage />}
    </div>
  );
}

export default App;
