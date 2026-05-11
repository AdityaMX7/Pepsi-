import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const rewards = [
  { name: "Sticker", rarity: "Common" },
  { name: "Magnet", rarity: "Common" },
  { name: "Pepsi Ball", rarity: "Uncommon" },
  { name: "Lamp", rarity: "Rare" },
  { name: "Voucher ₹100", rarity: "Rare" },
  { name: "Backpack", rarity: "Epic" },
  { name: "Gold Coin", rarity: "Legendary" },
];

export default function FloatingCard() {
  const [popup, setPopup] = useState(false);
  const [reward, setReward] = useState<any>(null);

  const handleClick = () => {
    const random = rewards[Math.floor(Math.random() * rewards.length)];
    setReward(random);
    setPopup(true);

    let collected = JSON.parse(localStorage.getItem("cards") || "[]");
    collected.push(random.name);
    localStorage.setItem("cards", JSON.stringify(collected));
  };

  return (
    <>
      {/* FLOATING CARD */}
     <motion.div
  onClick={handleClick}
  animate={{
    x: [0, 40, 80, 30, 0],
    y: [0, -60, -20, -40, 0],
  }}
  whileHover={{ scale: 1.08 }}
  transition={{
    duration: 180,
    repeat: 1,
    ease: "easeInOut",
  }}
  className="fixed top-20 right-32 w-[120px] h-[160px] rounded-xl cursor-pointer z-50"
  style={{
    background: "linear-gradient(145deg, gold, orange)",
    boxShadow: "0 0 25px gold",
  }}
>
        <img
          src="/images/pepsi-logo.png"
          className="w-[70%] mx-auto mt-5"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent animate-pulse" />
      </motion.div>

      {/* POPUP */}
      {popup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">
          <div className="bg-white text-black p-8 rounded-xl text-center">
            <h2 className="text-xl font-bold mb-4">🎉 Reward Unlocked</h2>
            <p className="mb-4">
              {reward?.rarity}: {reward?.name}
            </p>
            <button
              onClick={() => setPopup(false)}
              className="px-6 py-2 bg-black text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
