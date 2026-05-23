import api from "../api/axios";
import AdminLayout from "../components/AdminLayout";

export default function AdminFacts() {
  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fact = formData.get("fact");

    await api.post("/facts", { fact });

    alert("✅ Wellness fact published successfully");
    e.target.reset();
  };

  return (
    <AdminLayout
      title="🌿 Daily Wellness Fact"
      subtitle="Share mindful wellness tips with your community"
    >
      <form
        onSubmit={submit}
        className="
          max-w-2xl mx-auto
          bg-white/95
          backdrop-blur-xl
          border border-white
          rounded-[32px]
          p-8 md:p-10
          shadow-[0_20px_60px_rgba(108,99,255,0.08)]
          space-y-8
        "
      >
        {/* HEADER */}
        <div className="text-center">
          <div
            className="
              inline-flex items-center justify-center
              w-16 h-16
              rounded-2xl
              bg-gradient-to-br
              from-[#6C63FF]
              to-[#FFB088]
              text-white
              text-3xl
              shadow-lg
              mb-4
            "
          >
            🌿
          </div>

          <h2 className="text-2xl font-bold text-[#2F2F2F]">
            Create Daily Wellness Fact
          </h2>

          <p className="text-[#666] mt-2 leading-relaxed">
            Inspire users daily with yoga, mindfulness,
            meditation, and healthy lifestyle tips.
          </p>
        </div>

        {/* FACT INPUT */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-[#2F2F2F]">
            Wellness Fact
          </label>

          <textarea
            name="fact"
            rows={6}
            required
            placeholder="Example: Practicing yoga daily improves flexibility, posture, and emotional wellbeing."
            className="
              w-full
              rounded-3xl
              border border-[#E8E3FF]
              bg-[#FAF9FF]
              px-5 py-4
              text-[#2F2F2F]
              placeholder:text-[#999]
              resize-none
              outline-none
              transition-all duration-300
              focus:border-[#6C63FF]
              focus:ring-4
              focus:ring-[#B8B5FF]/30
            "
          />
        </div>

        {/* INFO CARD */}
        <div
          className="
            rounded-3xl
            bg-gradient-to-r
            from-[#F4F0FF]
            to-[#FFF1EA]
            border border-[#EEE8FF]
            p-5
          "
        >
          <p className="text-sm text-[#555] leading-7">
            💡 Wellness facts are displayed to users
            inside the app to encourage healthy habits,
            mindfulness, positivity, and emotional balance.
          </p>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#FFB088]
            text-white
            font-semibold
            text-lg
            shadow-[0_12px_30px_rgba(108,99,255,0.25)]
            hover:scale-[1.01]
            hover:shadow-[0_18px_40px_rgba(108,99,255,0.35)]
            transition-all duration-300
          "
        >
          Publish Wellness Fact
        </button>
      </form>
    </AdminLayout>
  );
}