import api from "../api/axios";
import AdminLayout from "../components/AdminLayout";

export default function AdminEvents() {
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await api.post("/events", formData);
    alert("✅ Event published successfully");
    e.target.reset();
  };

  return (
    <AdminLayout
      title="📅 Create New Event"
      subtitle="Fill the details below to publish a yoga event"
    >
      <form
        onSubmit={submit}
        className="bg-white max-w-2xl mx-auto rounded-xl shadow p-6 space-y-6"
      >
        {/* Event Info */}
<section className="space-y-6">
  {/* Event Title */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-gray-700">
      Event Title
    </label>
    <input
      name="title"
      placeholder="Morning Yoga for Beginners"
      required
      className="w-full rounded-lg border border-gray-300 px-4 py-3
                 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>
        
        {/* Event Description */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-gray-700">
      Event Description
    </label>
    <textarea
      name="description"
      placeholder="Briefly explain what this event is about"
      rows={4}
      className="w-full rounded-lg border border-gray-300 px-4 py-3
                 resize-none
                 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>
</section>

        {/* Schedule */}
        <section className="bg-gray-50 p-4 rounded-lg space-y-3">
          <h3 className="font-semibold text-gray-700">
            📍 Schedule & Location
          </h3>

          <input name="date" type="date" className="input" required />
          <input
            name="time"
            placeholder="6:00 AM – 7:00 AM"
            className="input"
          />
          <input
            name="location"
            placeholder="Yoga4U Center, Chennai"
            className="input"
          />
        </section>

        {/* Registration */}
        <section className="space-y-3">
          <label className="font-medium text-gray-700">
            Registration Link 
          </label>
          <input
            name="googleFormLink"
            placeholder="Paste Google Form link"
            className="input"
          />
        </section>

        {/* Image */}
        <section className="space-y-2">
          <label className="font-medium text-gray-700">
            Event Poster
          </label>
          <input
            name="pamphletImage"
            type="file"
            className="block w-full text-sm
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:bg-green-100 file:text-green-700"
          />
          <p className="text-xs text-gray-500">
            Upload an image to attract more participants
          </p>
        </section>

        <button className="w-full bg-green-700 text-white py-3 rounded-lg text-lg hover:bg-green-800">
          Publish Event
        </button>
      </form>
    </AdminLayout>
  );
}
