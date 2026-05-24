import React, { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do I need prior yoga experience to join a class?",
      a: "No prior experience is required. Our classes are designed for all levels—from complete beginners to advanced practitioners. Each session is guided step-by-step so you can comfortably learn at your own pace while improving flexibility, breathing, and mindfulness."
    },
    {
      q: "What should I bring to my first class?",
      a: "Bring a yoga mat, a water bottle, and comfortable breathable clothing that allows free movement. We also provide yoga props like blocks, straps, and cushions. If you don’t have a mat, you can inform us in advance for assistance."
    },
    {
      q: "Do I need to book classes in advance?",
      a: "Yes, prior booking is recommended to ensure your spot in the class, especially for group sessions. This helps us maintain personalized attention and a comfortable class size for better learning experience."
    },
    {
      q: "How early should I arrive for class?",
      a: "We recommend arriving at least 10–15 minutes early. This gives you time to settle in, relax your mind, and prepare your body before the session begins. Late entry may disrupt the flow of the class."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFF7F2] overflow-hidden">

      {/* Decorative Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">

        {/* HERO */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white shadow px-5 py-2 rounded-full text-sm text-purple-600 font-medium">
            <Sparkles size={16} />
            About YOGA4U Wellness Center
          </div>

          <h1 className="text-5xl font-bold text-[#2F2F2F] mt-6">
            Healing Through Yoga & Mindfulness
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A space dedicated to restoring balance, improving lifestyle health,
            and guiding individuals toward physical and mental wellness.
          </p>
        </div>

        {/* WELLNESS CENTER (NOW FIRST MAIN SECTION) */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-[#2F2F2F]">
            About YOGA4U Wellness Center
          </h2>

          <p className="mt-6 text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            YOGA4U Wellness Center is a holistic healing space designed to help
            individuals achieve complete well-being through yoga therapy,
            meditation, pranayama, stress management, and lifestyle correction.
            We focus on natural healing and long-term wellness transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Personalized Yoga Therapy",
              "Stress Relief & Mindfulness",
              "Lifestyle Disease Management"
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow">
                <h3 className="font-semibold text-purple-700">{item}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Tailored programs designed to improve your physical strength,
                  mental clarity, and emotional stability through guided practice.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AUTHOR / FOUNDER (NOW SECOND) */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-xl p-8 md:p-12">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516827003699-2880f453d93b?w=600&auto=format&fit=crop&q=60"
                alt="Founder"
                className="w-80 h-80 object-cover rounded-3xl shadow-lg"
              />

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm shadow-md">
                Founder • Yoga Therapist
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#2F2F2F]">
              Dr. S.R. Kalaimathi
            </h2>

            <p className="text-purple-600 font-medium mt-1">
              Wellness Expert | Yoga Therapist | Herbal Science Specialist
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              With over four decades of experience in yoga and holistic healing,
              Dr. Kalaimathi has dedicated her life to promoting physical health,
              emotional balance, and spiritual well-being.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              She served in education for 31 years before fully transitioning into
              wellness therapy, guiding individuals through yoga, meditation, and herbal science.
            </p>
          </div>
        </div>

        {/* FAQ (NOW LAST) */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-[#2F2F2F]">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4 max-w-3xl mx-auto">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-5 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#2F2F2F]">
                    {item.q}
                  </h3>
                  <ChevronDown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}