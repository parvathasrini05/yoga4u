import { useState } from "react";
import { motion } from "framer-motion";

const rewards = [
  { text: "🧘 Meditation", points: 10 },
  { text: "💧 Hydration", points: 5 },
  { text: "🌿 Breathing", points: 8 },
  { text: "🚶 Walk", points: 6 },
  { text: "📴 Detox", points: 12 },
  { text: "😊 Gratitude", points: 7 },
];

// 🔥 ZOMATO-STYLE HUMOUR (non-repetitive)
const humourPool = [
  "Your brain just said 'finally, some peace 🧘‍♂️'",
  "Even your stress is packing bags right now 😌",
  "Hydration check — your cells are thirsty 😤",
  "Your future self is proud already 💚",
  "This is cheaper than therapy 😉",
  "Doctor didn’t say it… but we did 😎",
  "Your body: ‘thank you boss 🙏’",
  "Stress level just dropped like your phone battery 🔋",
];

export default function WellnessSpin() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [usedHumour, setUsedHumour] = useState([]);

  const segmentAngle = 360 / rewards.length;

  const getRandomHumour = () => {
    const remaining = humourPool.filter(h => !usedHumour.includes(h));

    if (remaining.length === 0) {
      setUsedHumour([]); // reset when all used
      return humourPool[Math.floor(Math.random() * humourPool.length)];
    }

    const selected = remaining[Math.floor(Math.random() * remaining.length)];
    setUsedHumour([...usedHumour, selected]);
    return selected;
  };

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);

    const index = Math.floor(Math.random() * rewards.length);
    const selectedReward = rewards[index];

    const spinRotation = 360 * 5 + index * segmentAngle;

    setRotation(prev => prev + spinRotation);

    setTimeout(() => {
      setResult({
        ...selectedReward,
        humour: getRandomHumour(),
      });
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        Daily Wellness Spin
      </h2>
      <p className="text-gray-500 mb-10">
        Spin → Smile → Stay Healthy ✨
      </p>

      {/* POINTER */}
      <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-gray-800 mb-[-10px] z-10" />

      {/* WHEEL */}
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative w-80 h-80 rounded-full shadow-2xl border-8 border-white"
        style={{
          background: `conic-gradient(
            #34d399 0deg 60deg,
            #10b981 60deg 120deg,
            #6ee7b7 120deg 180deg,
            #059669 180deg 240deg,
            #34d399 240deg 300deg,
            #10b981 300deg 360deg
          )`,
        }}
      >

        {/* CENTER BUTTON */}
        <button
          onClick={handleSpin}
          disabled={spinning}
          className="absolute inset-0 m-auto w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg hover:scale-105 transition"
        >
          {spinning ? "..." : "SPIN"}
        </button>
      </motion.div>

      {/* RESULT */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 max-w-md bg-white p-6 rounded-3xl shadow-xl text-center border"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            {result.text}
          </h3>

          <p className="text-emerald-600 mt-2 font-medium">
            +{result.points} points
          </p>

          {/* 🔥 HUMOUR LINE */}
          <p className="mt-4 text-gray-600 italic">
            "{result.humour}"
          </p>
        </motion.div>
      )}
    </div>
  );
}