import api from "../api/axios";
import AdminLayout from "../components/AdminLayout";

export default function AdminPosts() {
  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);

      // Added headers for file upload handling
      await api.post("/posts", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Post published successfully");
      e.target.reset();
    } catch (error) {
      console.error("Error creating post:", error);
      alert(
        error.response?.data?.message ||
          "❌ Failed to publish post. Please try again."
      );
    }
  };

  return (
    <AdminLayout
      title="🏆 Create Community Post"
      subtitle="Share achievements, wellness moments, and inspiring updates"
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
            🏆
          </div>

          <h2 className="text-2xl font-bold text-[#2F2F2F]">
            Publish Community Post
          </h2>

          <p className="text-[#666] mt-2 leading-relaxed">
            Share yoga achievements, wellness milestones, event highlights, and
            inspiring community moments.
          </p>
        </div>

        {/* CAPTION */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-[#2F2F2F]">
            Post Caption
          </label>

          <textarea
            name="caption"
            rows={5}
            required
            placeholder="Example: We successfully completed 100 days of yoga and mindfulness together!"
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

        {/* IMAGE UPLOAD */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-[#2F2F2F]">
            Achievement Image / Poster
          </label>

          <div
            className="
              rounded-3xl
              border-2 border-dashed
              border-[#D9D5FF]
              bg-[#FAF9FF]
              p-6
              transition-all duration-300
              hover:border-[#6C63FF]
            "
          >
            <input
              name="image"
              type="file"
              required
              className="
                block w-full
                text-sm text-[#666]
                file:mr-4
                file:py-3
                file:px-5
                file:rounded-2xl
                file:border-0
                file:bg-gradient-to-r
                file:from-[#6C63FF]
                file:to-[#FFB088]
                file:text-white
                file:font-medium
                hover:file:opacity-90
                cursor-pointer
              "
            />

            <p className="text-xs text-[#888] mt-4 leading-6">
              Upload a high-quality image, poster, or memorable wellness moment
              to engage users.
            </p>
          </div>
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
            ✨ Community posts help users stay motivated, inspired, and
            connected with your wellness journey.
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
          Publish Post
        </button>
      </form>
    </AdminLayout>
  );
}