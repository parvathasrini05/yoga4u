import { useState, useEffect } from "react";
import wellnessCards from "../data/wellnessCards";
import WellnessCard from "../components/WellnessCard";
// Ensure this path is correct based on your folder structure
import cardBack from "../assets/oracle-back.png"; 

export default function WellnessOracle() {
  const [shuffledDeck, setShuffledDeck] = useState([]);

  useEffect(() => {
    // Fisher-Yates Shuffling for a truly random experience
    const deck = [...wellnessCards];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    setShuffledDeck(deck);
  }, []);

  return (
    /* FIX: Added 'pt-32'. Adjust this number (e.g., pt-24, pt-40) 
       depending on how tall your Navbar is. 
    */
    <div className="min-h-screen bg-[#fdf4f0] pt-32 pb-12 px-6">
      
      <header className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4">
          Yoga <span className="text-purple-600">Oracle</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Clear your mind, set an intention, and pick a card to guide your practice today. ✨
        </p>
      </header>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center max-w-7xl mx-auto">
        {shuffledDeck.map((card) => (
          <WellnessCard 
            key={card.id} 
            card={card} 
            cardBackImage={cardBack} 
          />
        ))}
      </div>
      
    </div>
  );
}