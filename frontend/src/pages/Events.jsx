import { useEffect, useState } from "react";
import api from "../api/axios";
import EventCard from "../components/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-4">
      {events.map(e => <EventCard key={e._id} event={e} />)}
    </div>
  );
}
