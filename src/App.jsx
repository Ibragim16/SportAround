import { useEffect, useState } from "react";
import "./App.css";
import Event from "./components/EventPage/EventPage";
import TimePage from "./components/TimePage/TimePage";

function App() {
  let array = [
    {
      "title": "Международный шахматный форум \"Moscow Open\"",
      "is_main": false,
      "dt_start": "2022-11-14T16:00:00+03:00",
      "dt_end": "2022-11-20T20:00:00+03:00",
      "dt_create": "2022-06-28T11:18:29+03:00"
    },
    {
      "title": "Международный шахматный форум \"Moscow Open\"",
      "is_main": false,
      "dt_start": "2022-07-14T16:00:00+03:00",
      "dt_end": "2022-07-20T20:00:00+03:00",
      "dt_create": "2022-06-28T11:18:29+03:00"
    },
  ]
  const [eventsSpisok, setEventsSpisok] = useState(array);
  const [error, setError] = useState(null);
  

  // useEffect(() => {
  //   setInterval(() => {
  //     fetch("https://beta.sosportom.ru/graphqdl/", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         query:
  //           "query videostandEvents ($videostand_id: ID!) { videostandEvents(videostand_id: $videostand_id) { current_and_upcoming { title, is_main, dt_start, dt_end, dt_create }, finished { title, is_main, dt_start, dt_end, dt_create } } }",
  //         variables: { videostand_id: "6" },
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setState(() => data.data.videostandEvents.current_and_upcoming);
  //       })
  //       .catch((err)=>{
  //         setError(()=> err.toString())
  //       });
  //   }, 6000);
  //   console.log(error)

  // }, []);

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
