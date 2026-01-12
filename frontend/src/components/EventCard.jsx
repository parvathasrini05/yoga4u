import { formatDate } from "/utils/formatDate";

export default function EventCard({ event }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold">{event.title}</h3>
      <p>{event.description}</p>
      <p className="text-sm mt-2">{formatDate(event.date)}</p>
      <a
        href={event.googleFormLink}
        className="text-primary font-semibold"
        target="_blank"
      >
        Register
      </a>
    </div>
  );
}
