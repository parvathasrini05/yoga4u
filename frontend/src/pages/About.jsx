import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          About YOGA4U
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image section */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/uploads/about/kalai.jpg"
              alt="Dr. S.R. Kalaimathi"
              className="rounded-full shadow-lg w-48 h-48 object-cover"
            />
          </div>

          {/* Text content */}
          <div className="md:w-2/3 text-gray-700 text-lg space-y-4">
            <p>
              <strong>Yogini Dr. S.R. Kalaimathi</strong>, a Yoga therapist and herbal science expert, started her journey in yoga at the age of 11 in 1978 under the guidance of her father, who learned Asanas from the renowned Guru Sri V.N. Kumarasamy in 1953.
            </p>
            <p>
              Combining her professional career in the educational department, where she served for 31 years, with her deep-rooted passion for wellness, she chose to dedicate herself fully to promoting health and mindfulness through yoga in 2018.
            </p>
            <p>
              Dr. Kalaimathi has received numerous awards for her contributions, and in 2016, she published a book to raise awareness about yoga and herbal medicine. She is a proud member of <strong>IYA</strong> and <strong>TNYC</strong>.
            </p>
            <p>
              Her ultimate goal is to rejuvenate the mind, body, and soul, helping people live happy and healthy lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
