import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1E1B2E] text-white pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Yoga4U WELLNESS CENTRE
          </h2>

          <p className="text-[#CFCFCF] mt-4 leading-relaxed">
            Therapeutic yoga and holistic wellness programs guided by
            Dr. S. R. Kalaimathi.
          </p>

          <div className="mt-6 space-y-2 text-[#CFCFCF] text-sm">
            <p>Madhavaram Milk Colony, Chennai</p>
            <p>+91 XXXXX XXXXX</p>
            <p>Mon – Thu • 6 AM – 7 PM</p>
          </div>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Site Links</h3>

          <div className="space-y-3 text-[#CFCFCF]">
            <Link to="/events" className="hover:text-white block">Programs</Link>
            <Link to="/posts" className="hover:text-white block">Community Posts</Link>
            <Link to="/healing-stories" className="hover:text-white block">Healing Stories</Link>
            <Link to="/oracle" className="hover:text-white block">Try Wellness Oracle</Link>
            <Link to="/about" className="hover:text-white block">About Us</Link>
         
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

          <div className="space-y-3 text-[#CFCFCF] text-sm">
            <p>Email : yoga4u@gmail.com</p>
            <p>Phone : +91 XXXXX XXXXX</p>
            <p>Chennai, Tamil Nadu</p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-14 pt-6 text-center text-[#A5A5A5] text-sm">
        © 2026 Yoga4U Wellness Centre • Designed for holistic wellness and mindful living.
      </div>
    </footer>
  );
}