import api from "../api/axios";
import AdminLayout from "../components/AdminLayout";

export default function AdminFacts() {
  const submit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const fact = formData.get("fact");   // ✅ FIXED
  
    await api.post("/facts", { fact });  // send JSON, not FormData
  
    alert("✅ Fact saved");
    e.target.reset();
  };

  return (
    <AdminLayout
      title="🌿 Daily Wellness Fact"
      subtitle="This will be shared with users automatically"
    >
      <form
        onSubmit={submit}
        className="bg-white max-w-xl mx-auto rounded-xl shadow p-6 space-y-6"
      >
        {/* Fact Text */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">
            Fact
          </label>
          <textarea
            name="fact"   // ✅ FIXED
            rows={4}
            placeholder="Example: Practicing yoga daily improves flexibility and mental focus."
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3
                       resize-none
                       focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Submit */}
        <button className="w-full bg-green-700 text-white py-3 rounded-lg text-lg hover:bg-green-800 transition">
          Save Fact
        </button>
      </form>
    </AdminLayout>
  );
}
