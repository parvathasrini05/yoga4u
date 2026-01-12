import api from "../api/axios";
import AdminLayout from "../components/AdminLayout";

export default function AdminPosts() {
  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await api.post("/posts", data);
    alert("✅ Post published");
    e.target.reset();
  };

  return (
    <AdminLayout
      title="🏆 Create Post"
      subtitle="Share achievements or special moments"
    >
      
      <form
  onSubmit={submit}
  className="bg-white max-w-xl mx-auto rounded-xl shadow p-6 space-y-6"
>
  {/* Caption */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-gray-700">
      Caption
    </label>
    <textarea
      name="caption"
      rows={4}
      placeholder="We successfully completed 100 days of yoga!"
      required
      className="w-full rounded-lg border border-gray-300 px-4 py-3
                 resize-none
                 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>

  {/* Achievement Image Upload */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-gray-700">
      Achievement Image / Poster
    </label>
    <input
      name="image"
      type="file"
      required
      className="block w-full text-sm text-gray-600
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-lg file:border-0
                 file:bg-green-100 file:text-green-700
                 hover:file:bg-green-200"
    />
    <p className="text-xs text-gray-500">
      Upload an image related to this achievement or post
    </p>
  </div>

  {/* Submit */}
  <button className="w-full bg-green-700 text-white py-3 rounded-lg text-lg hover:bg-green-800 transition">
    Publish Post
  </button>
</form>

    </AdminLayout>
  );
}
