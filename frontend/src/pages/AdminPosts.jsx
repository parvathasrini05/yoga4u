import api from "../api/axios";

export default function AdminPosts() {
  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await api.post("/posts", data);
    alert("Post Created");
  };

  return (
    <form onSubmit={submit} className="p-6 bg-white max-w-lg mx-auto">
      <h2 className="text-xl text-primary">Create Post</h2>
      <input name="caption" placeholder="Caption" className="input" />
      <input name="image" type="file" className="mt-2" />
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded">
        Create
      </button>
    </form>
  );
}
