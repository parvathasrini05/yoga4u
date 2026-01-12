import founder from "../assets/founder.png";

export default function Home() {
  return (
    <div className="bg-[#f5fbf7]">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          Yoga4U Wellness Center
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Rejuvenating Mind, Body & Soul
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          A space dedicated to holistic wellness through traditional yoga,
          therapeutic practices, and mindful living.
        </p>
      </section>

      {/* ABOUT FOUNDER */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <img
            src={founder}
            alt="Dr. S.R. Kalaimathi"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Founder – Dr. S. R. Kalaimathi
            </h2>

            <p className="text-gray-700 mb-4">
              Yoga Kalai Vallunar <strong>Dr. S. R. Kalaimathi</strong> began her
              yoga journey at the age of 11 in 1978 under the guidance of her
              father, who learned asanas from the renowned Guru
              Sri V. N. Kumarasamy in 1953.
            </p>

            <p className="text-gray-700 mb-4">
              With over <strong>31 years of service</strong> in the Educational
              Department, she chose to dedicate herself fully to wellness
              through yoga in 2018.
            </p>

            <p className="text-gray-700">
              A Yoga therapist and herbal science expert, award recipient,
              author, and member of <strong>IYA</strong> & <strong>TNYC</strong>,
              her mission is to help individuals lead happy, healthy lives.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section className="bg-[#f5fbf7] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Address */}
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Visit Us
            </h2>
            <p className="text-gray-700 mb-2">
              Yoga4U Wellness Center
            </p>
            <p className="text-gray-700 mb-2">
              📍 94, Alex Nagar B Colony , Madhavaram , Ch -51
            </p>
            <p className="text-gray-700 mb-2">
              📞 +91 73581 64557
            </p>
            <p className="text-gray-700">
              🕉️ Therapy • Wellness • Mindfulness
            </p>
          </div>

          {/* Google Map */}
          <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Yoga4U Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.218400321454!2d80.236408!3d13.1486194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265bc823a3623%3A0xa3af3666332b3d45!2sYoga4U%20Wellness%20Centre%20Online%20%26%20Offline!5e0!3m2!1sen!2sin!4v1768194275316!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
