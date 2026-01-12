import api from "../api/axios";

export default function AdminFacts() {
  const submit = async (e) => {
    e.preventDefault();
    await api.post("/facts", { text: e.target.text.value });
    alert("Fact Added");
  };

  return (
    <form onSubmit={submit} className="p-6 bg-white max-w-lg mx-auto">
      <h2 className="text-xl text-primary">Add Fact</h2>
      <textarea name="text" className="input h-32" />
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
