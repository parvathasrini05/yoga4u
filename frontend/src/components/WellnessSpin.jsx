import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const rewards = [
  { text: "🧘 Meditation", points: 10 },
  { text: "💧 Water Intake", points: 5 },
  { text: "🌬 Breathing", points: 8 },
  { text: "🚶 Walking", points: 6 },
  { text: "😊 Gratitude", points: 7 },
  { text: "⭐ Bonus Wellness", points: 10 },
];

export default function WellnessSpin() {
  const { width, height } = useWindowSize();

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [points, setPoints] = useState(0);
  const [completed, setCompleted] = useState(false);

  const segmentAngle = 360 / rewards.length;

  const handleSpin = () => {
    if (spinning) return;

    setCompleted(false);
    setResult(null);
    setSpinning(true);

    const index = Math.floor(Math.random() * rewards.length);
    const selectedReward = rewards[index];

    // Proper wheel alignment with top pointer
    const targetRotation =
      360 * 5 + (360 - index * segmentAngle - segmentAngle / 2);

    setRotation((prev) => prev + targetRotation);

    setTimeout(() => {
      setResult(selectedReward);
      setSpinning(false);

      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
    }, 3000);
  };

  const handleComplete = () => {
    if (!result || completed) return;

    setPoints((prev) => prev + result.points);
    setCompleted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF7F2] flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#B8B5FF]/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFB088]/20 blur-3xl rounded-full" />

      {/* CONFETTI */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={250}
          recycle={false}
        />
      )}

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center"
      >
        <p className="text-[#6C63FF] font-semibold tracking-wide mb-3">
          DAILY WELLNESS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] leading-tight">
          Wellness Spin Wheel
        </h2>

        <p className="text-[#666] mt-4 text-lg leading-relaxed max-w-xl">
          Spin daily, complete wellness activities, and collect mindfulness
          points.
        </p>

        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#FFB088] mx-auto mt-6" />
      </motion.div>

      {/* POINTS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 mt-10 bg-white px-8 py-5 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#F1F1F1]"
      >
        <p className="text-[#888] text-sm mb-1">
          Total Wellness Points
        </p>

        <h3 className="text-3xl font-bold text-[#6C63FF]">
          {points}
        </h3>
      </motion.div>

      {/* WHEEL SECTION */}
      <div className="relative z-10 mt-14 flex items-center justify-center">

        {/* POINTER */}
        <div className="absolute -top-5 z-30 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#2F2F2F]" />

        {/* OUTER RING */}
        <div className="absolute w-[360px] h-[360px] rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]" />

        {/* ROTATING WHEEL */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="relative w-[320px] h-[320px] rounded-full border-[10px] border-white overflow-hidden shadow-2xl"
          style={{
            background: `
              conic-gradient(
                #6C63FF 0deg 60deg,
                #FFB088 60deg 120deg,
                #B8B5FF 120deg 180deg,
                #6C63FF 180deg 240deg,
                #FFB088 240deg 300deg,
                #B8B5FF 300deg 360deg
              )
            `,
          }}
        >
        

          {/* CENTER BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handleSpin}
              disabled={spinning}
              className="w-24 h-24 rounded-full bg-[#2F2F2F] hover:bg-black text-white text-lg font-bold shadow-2xl transition-all duration-300 disabled:opacity-70 border-4 border-white z-20"
            >
              {spinning ? "..." : "SPIN"}
            </button>
          </div>
        </motion.div>
      </div>

      {/* RESULT CARD */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mt-14 w-full max-w-md bg-white rounded-[30px] p-8 shadow-[0_16px_50px_rgba(0,0,0,0.07)] border border-[#F1F1F1] text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#F4F0FF] text-[#6C63FF] font-medium mb-5">
            Wellness Task
          </div>

          <h3 className="text-3xl font-bold text-[#2F2F2F]">
            {result.text}
          </h3>

          <p className="text-[#FFB088] font-semibold mt-3 text-lg">
            +{result.points} Wellness Points
          </p>

          <p className="mt-5 text-[#666] leading-7">
            Complete this activity today to improve mindfulness, health, and
            emotional wellbeing.
          </p>

          <button
            onClick={handleComplete}
            disabled={completed}
            className="mt-7 w-full bg-gradient-to-r from-[#6C63FF] to-[#FFB088] hover:opacity-90 text-white py-3.5 rounded-2xl font-medium shadow-lg transition-all duration-300 disabled:opacity-60"
          >
            {completed ? "Completed ✓" : "Mark as Completed"}
          </button>
        </motion.div>
      )}
    </div>
  );
}