import api from "../api/axios";

export default function AdminEvents() {
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await api.post("/events", formData);
    alert("Event Created");
  };

  return (
    <form onSubmit={submit} className="p-6 bg-white max-w-lg mx-auto">
      <h2 className="text-xl text-primary">Create Event</h2>
      <input name="title" placeholder="Title" className="input" />
      <input name="description" placeholder="Description" className="input" />
      <input name="date" type="date" className="input" />
      <input name="time" placeholder="Time" className="input" />
      <input name="location" placeholder="Location" className="input" />
      <input name="googleFormLink" placeholder="Google Form Link" className="input" />
      <input name="pamphletImage" type="file" className="mt-2" />
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded">
        Create
      </button>
    </form>
  );
}
