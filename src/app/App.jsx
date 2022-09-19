import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./app.module.css";
import Error from "../components/EventPage/Error/Error";
import Event from "../components/EventPage/EventPage";
import TimePage from "../components/TimePage/TimePage";
import { fetchEvents } from "../redux/features/event";

function App() {
  const dispatch = useDispatch();

  const { event, error } = useSelector((state) => state.reducer);
  console.log(event)
  useEffect(() => {
    dispatch(fetchEvents());
    const interval = setInterval(() => {
      dispatch(fetchEvents());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.App}>
      {error !== null && (
        <div className={styles.errorModal}>
          <Error error={error} />
        </div>
      )}
      {event.length ? (
        <Event eventsSpisok={event} error={error} />
      ) : (
        <TimePage />
      )}
    </div>
  );
}

export default App;
