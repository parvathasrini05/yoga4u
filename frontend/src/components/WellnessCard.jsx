import { useState } from "react";
import { motion } from "framer-motion";

export default function WellnessCard({ card, cardBackImage }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="w-72 h-[450px] cursor-pointer" 
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full shadow-xl rounded-[20px]"
      >
        
        {/* BACK OF CARD (Initial State - Your Uploaded Image) */}
        <div
          className="absolute w-full h-full rounded-[20px] overflow-hidden backface-hidden border-4 border-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img 
            src={cardBackImage} 
            alt="Oracle Back" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
             <span className="text-white font-bold tracking-widest bg-black/40 px-4 py-2 rounded-full uppercase text-xs">
               Tap to Reveal
             </span>
          </div>
        </div>

        {/* FRONT OF CARD (The Info - Revealed on Flip) */}
        <div
          className="absolute w-full h-full bg-white rounded-[20px] p-5 flex flex-col backface-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)",
            boxShadow: "inset 0 0 50px rgba(0,0,0,0.05)"
          }}
        >
          <img src={card.image} className="w-full h-32 object-cover rounded-lg mb-3" alt={card.title} />
          
          <h3 className="text-xl font-bold text-purple-700 leading-tight uppercase">{card.title}</h3>
          <p className="italic text-gray-500 text-sm mb-2">{card.subtitle}</p>
          
          <div className="flex-grow overflow-y-auto pr-1 custom-scrollbar">
            <p className="text-xs text-gray-700 mb-2"><strong>How:</strong> {card.technique}</p>
            <p className="text-xs text-green-700 mb-2"><strong>Benefits:</strong> {card.benefits}</p>
            <p className="text-xs text-red-600"><strong>Watch out:</strong> {card.precaution}</p>
          </div>

          <button className="mt-4 bg-purple-600 text-white py-2 rounded-full text-xs font-bold hover:bg-purple-700 transition-colors">
            GOT IT
          </button>
        </div>
      </motion.div>
    </div>
  );
}