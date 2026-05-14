import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disco background based on scroll
  const discoBackground = {
    background: `
      radial-gradient(circle at ${scrollY % 100}% ${scrollY % 80}%, rgba(255, 0, 150, 0.6), transparent),
      radial-gradient(circle at ${(scrollY * 2) % 100}% ${(scrollY * 1.5) % 100}%, rgba(0, 255, 255, 0.5), transparent),
      radial-gradient(circle at ${(scrollY * 3) % 100}% ${(scrollY * 2) % 100}%, rgba(255, 255, 0, 0.4), transparent),
      black
    `,
    transition: "background 0.2s linear",
  };

  return (
    <div style={{ height: "200vh", overflowX: "hidden" }}>
      {/* BACKGROUND */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          ...discoBackground,
        }}
      />

      {/* CONTENT */}
      <div style={{ padding: "100px", color: "white" }}>
        <h1>🔥 Disco Scroll Effect</h1>
        <p>Scroll down to see the background animate like a party.</p>
      </div>

      {/* FLOATING CARD */}
      <motion.div
        animate={{
          x: [0, -40, 60, -20, 0],
          y: [0, -60, -20, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          top: "40px",
          right: "40px",
          width: "120px",
          height: "160px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, gold, orange)",
          boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
          zIndex: 10,
        }}
      />
    </div>
  );
}

export default App;
